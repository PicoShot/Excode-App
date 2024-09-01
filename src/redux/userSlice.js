import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const login = createAsyncThunk('user/login', async({ email, password }) => {
    try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const token = user.stsTokenManager.accessToken;

        // Return only serializable fields
        const userData = {
            uid: user.uid,
            email: user.email,
            accessToken: token,
        };

        return userData;
    } catch (error) {
        console.log('firebase: ', error);
        throw error;
    }
});

const initialState = {
    isLoading: false,
    isAuth: false,
    token: null,
    user: null,
    error: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.isAuth = false;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuth = true;
                state.user = {
                    uid: action.payload.uid,
                    email: action.payload.email,
                };
                state.token = action.payload.accessToken;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isAuth = false;
                state.error = action.error.message;
            });
    },
});

export const { setIsLoading } = userSlice.actions;
export default userSlice.reducer;
