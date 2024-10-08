import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { IUser } from "../interfaces";
import { userSlice } from "../features/userState/userSlice";

type UserStore = {
  user: IUser
}

export const store = configureStore<UserStore>({
  reducer: {
    user: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
