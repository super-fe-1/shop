import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth', // 슬라이스 이름
  initialState, // 초기 상태
  reducers: {
    // 액션과 리듀서를 정의
    loginSuccess: (state, action) => {
      state.user = action.payload.user; // 사용자 정보 업데이트
      state.token = action.payload.token; // 토큰 저장
      state.isAuthenticated = true; // 인증 상태 설정
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false; // 인증 상태 초기화
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
