import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8000/api";

export const fetchEntries = createAsyncThunk("form/fetchEntries", async () => {
  const response = await axios.get(`${API_URL}/entries`);
  return response.data;
});

export const addEntry = createAsyncThunk("form/addEntry", async (entry) => {
  const response = await axios.post(`${API_URL}/entries`, entry);
  return response.data;
});

const formSlice = createSlice({
  name: "form",
  initialState: { entries: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEntries.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEntries.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.entries = action.payload;
      })
      .addCase(fetchEntries.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addEntry.fulfilled, (state, action) => {
        state.entries.push(action.payload);
      });
  },
});

export default formSlice.reducer;
