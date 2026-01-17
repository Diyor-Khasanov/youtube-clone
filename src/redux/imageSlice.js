import { createSlice } from "@reduxjs/toolkit";
import { fetchApi } from "./api";

const initialState = {
  images: [],
  isLoading: false,
  err: null
}

export const imageSlice = createSlice({
  name: "images",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchApi.pending, (state) => {
      state.isLoading = true
    }).addCase(fetchApi.fulfilled, (state, action) => {
      state.isLoading = false
      state.images.push(action.payload)
    }).addCase(fetchApi.rejected, (state) => {
      state.isLoading = false
      state.err = 'Fetching error'
    })
  }
})
