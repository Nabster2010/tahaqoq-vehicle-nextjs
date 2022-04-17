import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { Params } from "./vehiclesSlice";

export const fetchColors = createAsyncThunk(
  "colors/fetchColors",
  async ({ page, size }: Params, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/colors?page=${page}&size=${size}`);
      return data;
    } catch (error) {
      const msg =
        error?.response?.data?.message ||
        error?.message ||
        "error fetching api";
      return thunkAPI.rejectWithValue(msg);
    }
  }
);
export const createColor = createAsyncThunk(
  "colors/createColor",
  async ({ color, router }: any, thunkAPI) => {
    try {
      const { data } = await axios.post("/api/colors", color);
      toast.success("color Added");
      router.push("/colors");
      return data;
    } catch (error) {
      const msg =
        error?.response?.data?.message ||
        error?.message ||
        "Error adding color";
      toast.error(msg);
      return thunkAPI.rejectWithValue(msg);
    }
  }
);
export const editColor = createAsyncThunk(
  "colors/editColor",
  async ({ color, router }: any, thunkAPI) => {
    try {
      const { data } = await axios.put(`/api/colors/${color.id}`, color);
      toast.success("Color Saved");
      router.push("/colors");
      return data;
    } catch (error) {
      const msg =
        error?.response?.data?.message ||
        error?.message ||
        "Error Saving color";
      toast.error(msg);
      return thunkAPI.rejectWithValue(msg);
    }
  }
);
export const deleteColor = createAsyncThunk(
  "colors/deleteColor",
  async (id: number, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/api/colors/${id}`);
      toast.success("color deleted");
      return data;
    } catch (error) {
      console.log(error);
      const msg =
        error?.response?.data?.message ||
        error?.message ||
        "Error deleting color";
      toast.error(msg);
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

const initialState = {
  colors: [],
  meta: {
    page: 0,
    size: 5,
    totalPages: 0,
  },
  loading: false,
  error: null,
};
const colorsSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchColors.fulfilled, (state, action) => {
      state.colors = action.payload.colors;
      state.meta = action.payload.meta;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchColors.pending, (state) => {
      state.colors = [];
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchColors.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.colors = [];
    });
    builder.addCase(createColor.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(createColor.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createColor.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(editColor.fulfilled, (state, action) => {
      state.colors = state.colors.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
      state.loading = false;
      state.error = null;
    });
    builder.addCase(editColor.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(editColor.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteColor.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteColor.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.colors = state.colors.filter(
        (item) => item.id !== action.payload.id
      );
    });
    builder.addCase(deleteColor.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default colorsSlice.reducer;
