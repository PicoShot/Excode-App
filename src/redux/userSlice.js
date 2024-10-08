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
import axios from "axios";

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

export const register = createAsyncThunk(
  "user/register",
  async ({ username, email, password }) => {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const token = user.stsTokenManager.accessToken;

      const storage = getStorage();
      const defaultProfilePicRef = ref(storage, "profilePictures/Default.png");
      const defaultProfilePicURL = await getDownloadURL(defaultProfilePicRef);

      await updateProfile(user, {
        displayName: username,
        photoURL: defaultProfilePicURL,
      });

      await sendEmailVerification(user);

      await AsyncStorage.setItem("userToken", token);

      return token;
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  }
);

export const sendAdSoyadRequest = createAsyncThunk(
  "user/sendAdSoyadRequest",
  async ({ ad, soyad, il, ilce } = {}) => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        const idToken = await user.getIdToken();

        const response = await axios.post(
          "https://api.picoshot.net/api/adsoyad",
          {
            ad: ad,
            soyad: soyad,
            il: il,
            ilce: ilce,
          },
          {
            headers: {
              Authorization: `Bearer ${idToken}`,
              "Content-Type": "application/json",
            },
          }
        );

        return response.data;
      } else {
        return { message: "User not found" };
      }
    } catch (error) {
      return error.message;
    }
  }
);

export const sendTCRequest = createAsyncThunk(
  "user/sendTCRequest",
  async ({ tc } = {}) => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        const idToken = await user.getIdToken();

        const response = await axios.post(
          "https://api.picoshot.net/api/tc",
          {
            tc: tc,
          },
          {
            headers: {
              Authorization: `Bearer ${idToken}`,
              "Content-Type": "application/json",
            },
          }
        );

        return response.data;
      } else {
        return { message: "User not found" };
      }
    } catch (error) {
      return error.message;
    }
  }
);

export const sendTCGSMRequest = createAsyncThunk(
  "user/sendTCGSMRequest",
  async ({ tc } = {}) => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        const idToken = await user.getIdToken();

        const response = await axios.post(
          "https://api.picoshot.net/api/tcgsm",
          {
            tc: tc,
          },
          {
            headers: {
              Authorization: `Bearer ${idToken}`,
              "Content-Type": "application/json",
            },
          }
        );

        return response.data;
      } else {
        return { message: "User not found" };
      }
    } catch (error) {
      return error.message;
    }
  }
);

export const sendGSMTCRequest = createAsyncThunk(
  "user/sendGSMTCRequest",
  async ({ gsm } = {}) => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        const idToken = await user.getIdToken();

        const response = await axios.post(
          "https://api.picoshot.net/api/gsmtc",
          {
            gsm: gsm,
          },
          {
            headers: {
              Authorization: `Bearer ${idToken}`,
              "Content-Type": "application/json",
            },
          }
        );

        return response.data;
      } else {
        return { message: "User not found" };
      }
    } catch (error) {
      return error.message;
    }
  }
);

export const sendAileRequest = createAsyncThunk(
  "user/sendAileRequest",
  async ({ tc } = {}) => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        const idToken = await user.getIdToken();

        const response = await axios.post(
          "https://api.picoshot.net/api/aile",
          {
            tc: tc,
          },
          {
            headers: {
              Authorization: `Bearer ${idToken}`,
              "Content-Type": "application/json",
            },
          }
        );

        return response.data;
      } else {
        return { message: "User not found" };
      }
    } catch (error) {
      return error.message;
    }
  }
);

export const sendSulaleRequest = createAsyncThunk(
  "user/sendSulaleRequest",
  async ({ tc } = {}) => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        const idToken = await user.getIdToken();

        const response = await axios.post(
          "https://api.picoshot.net/api/sulale",
          {
            tc: tc,
          },
          {
            headers: {
              Authorization: `Bearer ${idToken}`,
              "Content-Type": "application/json",
            },
          }
        );

        return response.data;
      } else {
        return { message: "User not found" };
      }
    } catch (error) {
      return error.message;
    }
  }
);

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
      // login request
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
      // autoLogin request
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
      // logout request
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
      // register request
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.isAuth = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = true;
        state.token = action.payload;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
        state.isAuth = false;
        state.error = "invalid Email or Password";
      })
      // adsoyad request
      .addCase(sendAdSoyadRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendAdSoyadRequest.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(sendAdSoyadRequest.rejected, (state, action) => {
        state.isLoading = false;
        console.error("Request failed:", action.payload);
      })
      // tc request
      .addCase(sendTCRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendTCRequest.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(sendTCRequest.rejected, (state, action) => {
        state.isLoading = false;
        console.error("Request failed:", action.payload);
      })
      // aile request
      .addCase(sendAileRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendAileRequest.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(sendAileRequest.rejected, (state, action) => {
        state.isLoading = false;
        console.error("Request failed:", action.payload);
      })
      // TCGSM request
      .addCase(sendTCGSMRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendTCGSMRequest.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(sendTCGSMRequest.rejected, (state, action) => {
        state.isLoading = false;
        console.error("Request failed:", action.payload);
      })
      // GSMTC request
      .addCase(sendGSMTCRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendGSMTCRequest.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(sendGSMTCRequest.rejected, (state, action) => {
        state.isLoading = false;
        console.error("Request failed:", action.payload);
      })
      // sulale request
      .addCase(sendSulaleRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendSulaleRequest.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(sendSulaleRequest.rejected, (state, action) => {
        state.isLoading = false;
        console.error("Request failed:", action.payload);
      })
  },
});

export const { setIsLoading } = userSlice.actions;
export default userSlice.reducer;
