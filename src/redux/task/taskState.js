import { createSlice } from '@reduxjs/toolkit'

export const taskState = createSlice({
  name: 'task',
  initialState: {
    value: '',
  },
  reducers: {
    setInputValue : (state,action ) => {
        state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setInputValue } = taskState.actions

export default taskState.reducer