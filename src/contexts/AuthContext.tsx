import {ReactNode, createContext, useEffect, useState} from 'react'
import * as AuthSession from "expo-auth-session"
import * as AppleAuthentication from "expo-apple-authentication"
import AsyncStorage from '@react-native-async-storage/async-storage';

const {CLIENT_ID} = process.env;
const {REDIRECT_URI} = process.env;

interface ProviderProps {
  children: ReactNode
}

interface User {
  id: string,
  name: string,
  email: string,
  photo?: string,
}

interface AuthorizationResponse {
  params: {
    access_token: string,
  },
  type: string,
}

interface AuthContextData {
  user: User,
  googleSignIn: () => Promise<void>;
  appleSignIn: () => Promise<void>;
  signOut: () => Promise<void>;
  loadingUser: boolean;
}

export const AuthContext = createContext({} as AuthContextData)


export function AuthContextProvider({children} : ProviderProps) {
  const [loadingUser, setLoadingUser] = useState(true)
  const [user, setUser] = useState({} as User)

  const userStorageKey = "@gofinances:user"
  
  async function loadStoredUser() {
    setLoadingUser(true)
    const response = await AsyncStorage.getItem(userStorageKey)
    const userStored = response ? JSON.parse(response) : []

    if(userStored) {
      setUser(userStored)
    }

    setLoadingUser(false)
  }

  async function googleSignIn() {
    try {
      const RESPONSE_TYPE = "token"
      const SCOPE =  encodeURI("profile email")
    
      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
    
      const {type, params} = await AuthSession.startAsync({authUrl}) as AuthorizationResponse

      if ( type === "success") {
        const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`)
        const responseFormatted = await response.json()

        const userLogged = {
          id: responseFormatted.id,
          name: responseFormatted.given_name,
          email: responseFormatted.email,
          photo: responseFormatted.picture
        }
        
        setUser(userLogged)
        await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged))
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  async function appleSignIn() {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL
        ]
      })

      if (credential) {
        const userLogged = {
          id: String(credential.user),
          name: credential.fullName.givenName,
          email: credential.email,
          photo: `https://ui-avatars.com/api/?name=${credential.fullName.givenName}`
        }

        setUser(userLogged)
        await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged))
      }

    } catch (error) {
      throw new Error(error)
    }
  }

  async function signOut() {
    setUser({} as User)
    await AsyncStorage.removeItem(userStorageKey)
  }

  useEffect(() => {
    loadStoredUser()
  },[])

  return(
    <AuthContext.Provider value={{user, googleSignIn, appleSignIn, signOut, loadingUser}}>
      {children}
    </AuthContext.Provider>
  )
}