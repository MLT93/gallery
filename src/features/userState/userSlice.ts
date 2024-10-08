import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../interfaces';

type IUserState = IUser & {
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
};

const EmptyUserState: IUserState = {
  id: 0,
  email: '',
  password: '',
  role: 'user',
  name: '',
  lName: '',
  phone: '',
  image_url: '',
  status: 'idle',
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: EmptyUserState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(.pending, (state, /* action */) => {
        state.status = 'pending';
        state.error = null;
      });
  },
});
