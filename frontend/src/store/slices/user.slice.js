import { createSlice } from '@reduxjs/toolkit';
import axios from '../../utils/axios';
import { genericRequestThunk } from './app.slice';

export const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        setUser: (_, {payload}) => payload
    }
})

export const createUserThunk = (user, navigate) => (dispatch) => {
    dispatch(genericRequestThunk(async () => {
        await axios().post('/users', user)
        navigate();
    }, "User created succesfully"));
}

export const getLoggedUserThunk = () => dispatch => {
    dispatch(genericRequestThunk(async () => {
        const res = await axios().get("/users/me")
        dispatch(setUser(res.data));
    }))
}

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
