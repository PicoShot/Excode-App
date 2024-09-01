import { createSlice, createAsyncThunk, } from "@reduxjs/toolkit";
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import loading from "../components/ExLoading";

export const login = createAsyncThunk('user/login', async({email, password}) =>{
    try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const Token = user.stsTokenManager.accessToken;
        const userData ={
            Token,
            user: user,
        }
        return userData;
    } catch (error) {
        console.log('firebase: ',error)
        throw error
    }
})

const initialState = {
email: null,
password: null,
isLoading: false,
isAuth: false,
token: null,
user: null,
error: null,
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setEmail:(state, actions) => {
            const clearEmail = actions.payload.toLocaleLowerCase('en-US');
            state.email = actions.payload;
        },
        setPassword:(state, actions) => {
            state.password = actions.payload
        },
        setIsLoading:(state, actions) => {
            state.isLoading = actions.payload
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(login.pending, (state) => {
            state.isLoading = true;
            state.isAuth = false;
        })
        .addCase(login.fulfilled, (state, actions) => {
            state.isLoading = false;
            state.isAuth = true;
            state.user = actions.payload.user;
            state.token = actions.payload.Token;
        })  
        .addCase(login.rejected, (state, actions) => {
            state.isLoading = false;
            state.isAuth = false;
            state.error = actions.error.message;
        })
    }
})

export const { setEmail, setPassword, setIsLoading, } = userSlice.actions;
export default userSlice.reducer;