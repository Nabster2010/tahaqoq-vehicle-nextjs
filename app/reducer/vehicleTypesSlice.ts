import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { Params } from "./vehiclesSlice";

export const fetchTypes = createAsyncThunk(
  "types/fetchTypes",
  async ({ page, size }: Params, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/api/vehicleTypes?page=${page}&size=${size}`
      );
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
export const createType = createAsyncThunk(
  "types/createType",
  async ({ type, router }: any, thunkAPI) => {
    try {
      const { data } = await axios.post("/api/vehicleTypes", type);
      toast.success("type Added");
      router.push("/vehicleTypes");
      return data;
    } catch (error) {
      const msg =
        error?.response?.data?.message || error?.message || "Error adding type";
      toast.error(msg);
      return thunkAPI.rejectWithValue(msg);
    }
  }
);
export const editType = createAsyncThunk(
  "types/editType",
  async ({ type, router }: any, thunkAPI) => {
    try {
      const { data } = await axios.put(`/api/vehicleTypes/${type.id}`, type);
      toast.success("Type Saved");
      router.push("/vehicleTypes");
      return data;
    } catch (error) {
      const msg =
        error?.response?.data?.message || error?.message || "Error Saving Type";
      toast.error(msg);
      return thunkAPI.rejectWithValue(msg);
    }
  }
);
export const deleteType = createAsyncThunk(
  "types/deleteType",
  async (id: number, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/api/vehicleTypes/${id}`);
      toast.success("Type deleted");
      return data;
    } catch (error) {
      console.log(error);
      const msg =
        error?.response?.data?.message ||
        error?.message ||
        "Error deleting Type";
      toast.error(msg);
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

const initialState = {
  vehicleTypes: [],
  meta: {
    page: 0,
    size: 5,
    totalPages: 0,
  },
  loading: false,
  error: null,
};
const vehicleTypesSlice = createSlice({
  name: "vehicleType",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTypes.fulfilled, (state, action) => {
      state.vehicleTypes = action.payload.vehicleTypes;
      state.meta = action.payload.meta;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchTypes.pending, (state) => {
      state.vehicleTypes = [];
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchTypes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.vehicleTypes = [];
    });
    builder.addCase(createType.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(createType.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createType.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(editType.fulfilled, (state, action) => {
      state.vehicleTypes = state.vehicleTypes.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
      state.loading = false;
      state.error = null;
    });
    builder.addCase(editType.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(editType.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteType.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteType.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.vehicleTypes = state.vehicleTypes.filter(
        (item) => item.id !== action.payload.id
      );
    });
    builder.addCase(deleteType.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default vehicleTypesSlice.reducer;
