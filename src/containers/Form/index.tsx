import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ButtonSave, MainContainer, Name } from '../../styles'
import { Field } from '../../styles'
import * as S from './styles'
import { Formulary } from './styles'

import { register } from '../../store/reducers/contatos'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [phone, setPhone] = useState<string[]>([])
  const [email, setEmail] = useState('')

  const registerContact = (event: FormEvent) => {
    event.preventDefault()

    dispatch(
      register({
        name,
        phone,
        email
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <S.Card>
        <Name>Novo contato</Name>
        <Formulary onSubmit={registerContact}>
          <Field
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Nome completo"
          />
          <Field
            value={phone.join(', ')}
            onChange={(event) => setPhone(event.target.value.split(', '))}
            type="text"
            placeholder="número de telefone"
          />
          <Field
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="text"
            placeholder="Email"
          />
          <ButtonSave type="submit">Cadastrar</ButtonSave>
        </Formulary>
      </S.Card>
    </MainContainer>
  )
}

export default Form
