import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuth: boolean;
  user: {
    name: string;
    email: string;
  } | null;
}

const initialState: AuthState = {
  isAuth: false,
  user: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setUser: (state, action: PayloadAction<AuthState['user']>) => {
      state.user = action.payload;
    }
  }
});

export const { setAuth, setUser } = authSlice.actions;
export default authSlice.reducer;
