import { API, type AuthState } from "@/types/typesSlice";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  token: null,
};
export const signup = createAsyncThunk(
  "auth/signup",
  async (payload: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${API}/create-account`, payload, {
        withCredentials: true,
      });
      return res.data.data.user;
    } catch (error: any) {
      // Handle specific error messages from backend
      const message = error.response?.data?.message || "Signup failed";
      return rejectWithValue(message);
    }
  },
);

export const login = createAsyncThunk(
  "auth/login",
  async (payload: { email: string; password: string }) => {
    const res = await axios.post(`${API}/login`, payload, {
      withCredentials: true,
    });
    return res.data;
  },
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await axios.get(`${API}/logout`, { withCredentials: true });
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.token = action.payload.token;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Signup failed";
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
      });
  },
});

export default authSlice.reducer;
