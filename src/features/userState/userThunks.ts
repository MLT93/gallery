import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchApi } from "../../utils/fetchApi";

export const getUserThunks = createAsyncThunk('users/get', async () => {
  const resp = await fetchApi<Response>(`/api/v1/mybookings2`, 'GET', `?active=active`, null, true, true);

  return resp;
});
