import { configureStore } from "@reduxjs/toolkit";
import { imageSlice } from "./redux/imageSlice";

export const store = configureStore({
  reducer: {
    imageApp: imageSlice.reducer
  }
})
