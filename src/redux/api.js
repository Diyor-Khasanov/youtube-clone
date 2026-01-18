import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
const API = 'https://dummyjson.com/recipes'

export const fetchApi = createAsyncThunk('images/fetchApi', async () => {
  const response = await axios.get(`${API}?limit=50`)
  return response.data.recipes
})

export const fetchVideoDetails = createAsyncThunk('images/fetchVideoDetails', async (id) => {
  const response = await axios.get(`${API}/${id}`)
  return response.data
})
