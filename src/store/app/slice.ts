import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AppState {
  option: string;
  note: string;
}

const initialState: AppState = {
  option: '',
  note: ''
}

export const optionSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setOption: (state, action: PayloadAction<string>) => {
      state.option = action.payload
    },
    setNote: (state, action: PayloadAction<string>) => {
      state.note = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setOption, setNote } = optionSlice.actions

export default optionSlice.reducer