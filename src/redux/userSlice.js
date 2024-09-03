import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getStorage, ref, getDownloadURL } from "firebase/storage";


export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }) => {
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const token = user.stsTokenManager.accessToken;

      const userData = {
        user: user,
        Token: token,
      };

      await AsyncStorage.setItem("userToken", token);

      return userData;
    } catch (error) {
      console.log("firebase: ", error);
      throw error;
    }
  }
);

export const autoLogin = createAsyncThunk("user/autoLogin", async () => {
  try {
    const token = await AsyncStorage.getItem("userToken");

    if (token) {
      return token;
    } else {
      throw new Error("User Not Found");
    }
  } catch (error) {
    throw error;
  }
});

export const logout = createAsyncThunk("user/logout", async () => {
  try {
    const auth = getAuth();
    await signOut(auth);
    await AsyncStorage.removeItem("userToken");

    return null;
  } catch (error) {
    throw error;
  }
});

export const register = createAsyncThunk("user/register", async ({username, email, password }) => {
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const token = user.stsTokenManager.accessToken;

    const storage = getStorage();
    const defaultProfilePicRef = ref(storage, 'profilePictures/Default.png');
    const defaultProfilePicURL = await getDownloadURL(defaultProfilePicRef);

    await updateProfile(user, {
      displayName: username,
      photoURL: defaultProfilePicURL,
    });
    console.log(defaultProfilePicURL);
    

    await sendEmailVerification(user);

    await AsyncStorage.setItem("userToken", token);

    return token;
  } catch (error) {
    console.error("Registration error:", error);
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
  name: "user",
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
          uid: action.payload.user.uid,
          email: action.payload.user.email,
        };
        state.token = action.payload.accessToken;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuth = false;
        state.error = action.error.message;
      })

      .addCase(autoLogin.pending, (state) => {
        state.isLoading = true;
        state.isAuth = false;
      })
      .addCase(autoLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = true;
        state.token = action.payload;
      })
      .addCase(autoLogin.rejected, (state) => {
        state.isLoading = false;
        state.isAuth = false;
        state.token = null;
      })

      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.isAuth = false;
        state.token = null;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.isAuth = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = true;
        state.token = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuth = false;
        state.error = 'invalid Email or Password';
      });
  },
});

export const { setIsLoading } = userSlice.actions;
export default userSlice.reducer;
