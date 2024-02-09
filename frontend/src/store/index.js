import { configureStore } from '@reduxjs/toolkit'
import appSlice from './slices/app.slice'
import todosSlice from './slices/todos.slice'
import userSlice from './slices/user.slice'

export default configureStore({
    reducer: {
        app: appSlice,
        user: userSlice,
        todos: todosSlice
    }
})
