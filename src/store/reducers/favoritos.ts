import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarOuRemover: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const existe = state.itens.find((p) => p.id === produto.id)

      if (existe) {
        state.itens = state.itens.filter((p) => p.id !== produto.id)
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adicionarOuRemover } = favoritoSlice.actions

export default favoritoSlice.reducer
