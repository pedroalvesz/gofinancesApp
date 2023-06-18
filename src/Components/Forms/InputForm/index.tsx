import { TextInputProps } from 'react-native'
import { Controller, Control } from 'react-hook-form'

import { Input } from '../Input'


import {
  Container,
  Error,
} from './style'

interface Props extends TextInputProps {
  control: Control;
  name: string;
  error: string;
}

// É possível gerenciar inputs com estado, porém como a cada atualização de texto, o estado é atualizado e aquele input é renderizado novamente, isso não é performatico, por isso usamos o hook form, que controla o input, somente gerando atualização quando um botão submit é pressionado.

export function InputForm({control, name, error, ...rest} : Props) {
  return(
    <Container>
      <Controller
      control={control}
      render={({field: { onChange, value }}) => (
        <Input
          onChangeText={onChange}
          value={value}
          {...rest}
        />
      )}
      name={name}
      />

      {error && <Error>{ error }</Error>}
    </Container>
  )
}