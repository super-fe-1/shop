import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios/axios';

const saveToken = (token) => localStorage.setItem('accessToken', token);
const removeToken = () => localStorage.removeItem('accessToken');

const initialState = {
  isLog: false,
};

export const __signup = createAsyncThunk('signup', async (payload, api) => {
  try {
    const res = await axios.post(`/users`, payload);
    // const res = await axios.post(`/api/auth/register`, payload);
    console.log(res);
  } catch (err) {
    return api.rejectWithValue(err.response.status);
  }
});

export const __login = createAsyncThunk('login', async (payload, api) => {
  try {
    console.log(payload);
    const res = await axios.post(`/login`, payload);
    console.log(res);
    // const res = await axios.post(`api/auth/login`, payload);
    // return res.data.accessToken;
  } catch (err) {
    return api.rejectWithValue(err.response.status);
  }
});

// Slice 생성
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    //로그인 상태 유지
    setLogin: (state, action) => {
      state.isLog = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // 회원가입
      .addCase(__signup.fulfilled, (state, action) => {
        state.isLog = false;
      })
      .addCase(__signup.rejected, (state, action) => {
        state.isLog = false;
      })

      // 로그인
      .addCase(__login.fulfilled, (state, action) => {
        saveToken(action.payload);
        state.isLog = true;
      })
      .addCase(__login.rejected, (state, action) => {
        state.isLog = false;
      });
  },
});

// actions
export const { setLogin } = userSlice.actions;

//reducer
export default userSlice.reducer;
