import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
const API = 'https://api.unsplash.com/photos?per_page=10&client_id=b4syBxOoocDZqkFdzNLA-wizHMsw2vPbBQTGMcTyaCE'

export const fetchApi = createAsyncThunk('images/fetchApi', async () => {
  const response = await axios.get(API)
  // console.log(response.data)
  return response.data
})
