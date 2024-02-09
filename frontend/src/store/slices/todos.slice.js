import { createSlice } from '@reduxjs/toolkit';
import axios from '../../utils/axios';
import { genericRequestThunk } from './app.slice';


export const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        setTodos: (_, { payload }) => payload,
        addTodo: (state, { payload }) => {state.push(payload)},
        updateTodo: (state, { payload: toDo }) => {
            const index = state.findIndex(t => t.id === toDo.id);
            state[index] = toDo;
        },
        deleteTask: (state, { payload: id }) => {
            return state.filter(todo => todo.id !== id);
        }
    }
})

export const getTodosThunk = () => (dispatch) => {
    dispatch(genericRequestThunk(async () => {
        const res = await axios().get('/todos');
        dispatch(setTodos(res.data));
    }))
}

export const addToDoThunk = task => (dispatch, getState) => {
    dispatch(genericRequestThunk(async () => {
        const res = await axios().post('/todos', { task, isCompleted: false });
        dispatch(addTodo(res.data));
    }))
}

export const checkToDoThunk = toDo => (dispatch) => {
    dispatch(genericRequestThunk(async () => {
        const res = await axios().put(`/todos/${toDo.id}`, { isCompleted: !toDo.isCompleted });
        dispatch(updateTodo(res.data));
    }))
}

export const updateTaskThunk = (task, id) => dispatch => {
    dispatch(genericRequestThunk(async () => {
        const res = await axios().put(`/todos/${id}`, { task })
        dispatch(updateTodo(res.data));
    }, "To Do updated succesfully"));
}

export const deleteTaskThunk = id => dispatch => {
    dispatch(genericRequestThunk(async () => {
        await axios().delete(`/todos/${id}`)
        dispatch(deleteTask(id));
    }))
}

export const { setTodos, addTodo, updateTodo, deleteTask } = todosSlice.actions;

export default todosSlice.reducer;
