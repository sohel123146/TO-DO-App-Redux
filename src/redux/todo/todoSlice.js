import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    value: [],
  },
  reducers: {
    addTodo: (state, action) => {
        state.value.push({
          id: Date.now(),
          text: action.payload,
          completed: false
        });
      },
    
      deleteTodo : (state,action) => {
        state.value = state.value.filter((todo) => todo.id !== action.payload)
      },

      editTodo: (state, action) => {
        const { id, text } = action.payload;
        const todo = state.value.find(todo => todo.id === id);
        if (todo && text.trim() !== '') {
          todo.text = text;
        }
      },
      toggleTodo: (state, action) => {
        const todo = state.value.find(todo => todo.id === action.payload);
        if (todo) {
          todo.completed = !todo.completed;
        }
      },
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, editTodo, toggleTodo } = todoSlice.actions

export default todoSlice.reducer