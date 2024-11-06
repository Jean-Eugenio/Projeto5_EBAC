import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type FilterState = {
  term?: string
}

const initialState: FilterState = {
  term: ''
}

const filterSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    changeTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    }
  }
})

export const { changeTerm } = filterSlice.actions

export default filterSlice.reducer
