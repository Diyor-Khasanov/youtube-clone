import { createSlice } from "@reduxjs/toolkit";
import { fetchApi, fetchVideoDetails } from "./api";

const initialState = {
  images: [],
  isLoading: false,
  err: null,
  videoDetails: {},
  searchTerm: "",
};

export const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    clearImages: (state) => {
      state.images = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.images = action.payload;
      })
      .addCase(fetchApi.rejected, (state) => {
        state.isLoading = false;
        state.err = "Fetching error";
      })

      .addCase(fetchVideoDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchVideoDetails.fulfilled, (state, action) => {
        state.videoDetails = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchVideoDetails.rejected, (state) => {
        state.err = "Video Details Fetching Error";
        state.isLoading = false;
      });
  },
});

export const { setSearchTerm, clearImages } = imageSlice.actions;
export default imageSlice.reducer;
