import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import todoReducer from './todo/todoSlice'
import taskState from './task/taskState'

export default configureStore({
  reducer: {
    counter:counterReducer,
    todo:todoReducer,
    task:taskState,
  },
})