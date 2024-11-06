import { useSelector } from 'react-redux'

import Contact from '../../components/Contato'
import { MainContainer, Name } from '../../styles'

import { RootReducer } from '../../store'

const ContactsList = () => {
  const { items } = useSelector((state: RootReducer) => state.contacts)
  const { term } = useSelector((state: RootReducer) => state.filter)

  const filterContacts = () => {
    let filteredContacts = items
    if (term !== undefined) {
      filteredContacts = filteredContacts.filter(
        (item) => item.name.toLowerCase().search(term.toLowerCase()) >= 0
      )

      return filteredContacts
    } else {
      return items
    }
  }

  const showFilterResult = (quantity: number) => {
    let message = ''

    message =
      term !== undefined && term.length > 0
        ? `${quantity} contato(s) encontrado(s): "${`${term}`}"`
        : ''

    return message
  }

  const contacts = filterContacts()
  const message = showFilterResult(contacts.length)

  return (
    <MainContainer>
      <Name as="p">{message}</Name>
      <ul>
        {contacts.map((c) => (
          <li key={c.name}>
            <Contact id={c.id} name={c.name} phone={c.phone} email={c.email} />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ContactsList
