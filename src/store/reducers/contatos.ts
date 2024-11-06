import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contato'

type ContactsState = {
  items: Contact[]
}

const initialState: ContactsState = {
  items: [
    {
      id: 1,
      name: 'Gabriel Barbosa',
      phone: ['21 19202224'],
      email: 'GabrielBarbosa@gmail.com'
    },
    {
      id: 2,
      name: 'Giorgian de arrascaeta',
      phone: ['21 24221920'],
      email: 'Arrascaeta2019@gmail.com'
    },
    {
      id: 3,
      name: 'Pedro guilherme',
      phone: ['21 22202324'],
      email: 'Pedroguilherme@gmail.com'
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.items = [
        ...state.items.filter((contact) => contact.id !== action.payload)
      ]
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.items.findIndex(
        (c) => c.id === action.payload.id
      )

      if (contactIndex >= 0) {
        state.items[contactIndex] = action.payload
      }
    },
    register: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const contactExists = state.items.find(
        (contact) =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      )

      if (contactExists) {
        alert('Contact already exists!')
      } else {
        const lastContact = state.items[state.items.length - 1]

        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.items.push(newContact)
      }
    }
  }
})

export const { remove, edit, register } = contactsSlice.actions

export default contactsSlice.reducer
