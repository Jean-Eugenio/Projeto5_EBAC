import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remove, edit } from '../../store/reducers/contatos'
import ContactClass from '../../models/Contato'
import { Button, ButtonSave } from '../../styles'

type Props = ContactClass

const Contact = ({
  name: originalName,
  phone: originalPhone,
  email: originalEmail,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState<string[]>([])
  const [email, setEmail] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (originalName.length > 0) {
      setName(originalName)
    }
    if (originalPhone.length > 0) {
      setPhone([...originalPhone])
    }
    if (originalEmail.length > 0) {
      setEmail(originalEmail)
    }
  }, [originalName, originalPhone, originalEmail])
  const handleAddPhone = () => {
    const numericOnly = newPhone.replace(/[^0-9]/g, '')
    if (numericOnly.length > 0) {
      setPhone((prevPhones) => [...prevPhones, numericOnly])
      setNewPhone('')
      setErrorMessage('')
    } else {
      setErrorMessage('O número de telefone não pode ser não numérico')
    }
  }
  const handleEditPhone = (index: number, editedPhone: string) => {
    const numericOnly = editedPhone.replace(/[^0-9]/g, '')
    const updatedPhones = [...phone]
    updatedPhones[index] = numericOnly
    setPhone(updatedPhones)
  }
  const handleDeletePhone = (index: number) => {
    const updatedPhones = phone.filter((_, i) => i !== index)
    setPhone(updatedPhones)
  }
  function cancelEdit() {
    setIsEditing(false)
    setName(originalName)
    setPhone(originalPhone)
    setEmail(originalEmail)
    setErrorMessage('')
  }

  return (
    <S.Card>
      <S.Name
        disabled={!isEditing}
        value={name}
        onChange={(evento) => setName(evento.target.value)}
      />
      <S.PhoneList>
        {phone.map((phoneNumber, index) => (
          <S.PhoneContainer key={index}>
            <S.Phone
              disabled={!isEditing}
              value={phoneNumber}
              onChange={(event) => handleEditPhone(index, event.target.value)}
            />
            {isEditing && (
              <>
                <S.DeleteButton onClick={() => handleDeletePhone(index)}>
                  Deletar
                </S.DeleteButton>
              </>
            )}
          </S.PhoneContainer>
        ))}
        {isEditing && (
          <S.PhoneContainer key="novo-telefone">
            <S.Phone
              value={newPhone}
              onChange={(event) => setNewPhone(event.target.value)}
            />
            <S.AddButton onClick={handleAddPhone}>Adicionar</S.AddButton>
          </S.PhoneContainer>
        )}
      </S.PhoneList>
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
      <S.Email
        disabled={!isEditing}
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
      />
      <hr />
      <S.ActionBar>
        {isEditing ? (
          <>
            <ButtonSave
              onClick={() => {
                dispatch(
                  edit({
                    name,
                    phone,
                    email,
                    id
                  })
                )
                setIsEditing(false)
                setErrorMessage('')
              }}
            >
              Salvar
            </ButtonSave>
            <S.ButtonCancelRemove onClick={cancelEdit}>
              Cancelar
            </S.ButtonCancelRemove>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)}>Editar</Button>
            <S.ButtonCancelRemove onClick={() => dispatch(remove(id))}>
              Remover
            </S.ButtonCancelRemove>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Contact
