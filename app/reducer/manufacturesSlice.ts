import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { Params } from "./vehiclesSlice";

export const fetchManufactures = createAsyncThunk(
  "manufactures/fetchManufactures",
  async (params: Params | null, thunkAPI) => {
    const { page, size } = params;
    const url =
      !page && !size
        ? "/api/manufactures"
        : `/api/manufactures?page=${page}&size=${size}`;
    try {
      const { data } = await axios.get(url);
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
export const createManufacture = createAsyncThunk(
  "manufactures/createManufacture",
  async ({ manufacture, router }: any, thunkAPI) => {
    try {
      const { data } = await axios.post("/api/manufactures", manufacture);
      toast.success("manufacture Added");
      router.push("/manufactures");
      return data;
    } catch (error) {
      const msg =
        error?.response?.data?.message ||
        error?.message ||
        "Error adding manufacture";
      toast.error(msg);
      return thunkAPI.rejectWithValue(msg);
    }
  }
);
export const editManufacture = createAsyncThunk(
  "manufactures/editManufacture",
  async ({ manufacture, router }: any, thunkAPI) => {
    try {
      const { data } = await axios.put(
        `/api/manufactures/${manufacture.id}`,
        manufacture
      );
      toast.success("manufacture Saved");
      router.push("/manufactures");
      return data;
    } catch (error) {
      const msg =
        error?.response?.data?.message ||
        error?.message ||
        "Error Saving manufacture";
      toast.error(msg);
      return thunkAPI.rejectWithValue(msg);
    }
  }
);
export const deleteManufacture = createAsyncThunk(
  "manufactures/deleteManufacture",
  async (id: number, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/api/manufactures/${id}`);
      toast.success("Manufacture deleted");
      return data;
    } catch (error) {
      console.log(error);
      const msg =
        error?.response?.data?.message ||
        error?.message ||
        "Error deleting Manufacture";
      toast.error(msg);
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

const initialState = {
  manufactures: [],
  meta: {
    page: 0,
    size: 5,
    totalPages: 0,
  },
  loading: false,
  error: null,
};
const manufacturesSlice = createSlice({
  name: "manufacture",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchManufactures.fulfilled, (state, action) => {
      state.manufactures = action.payload.manufacturers;
      state.meta = action.payload.meta;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchManufactures.pending, (state) => {
      state.manufactures = [];
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchManufactures.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.manufactures = [];
    });
    builder.addCase(createManufacture.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(createManufacture.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createManufacture.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(editManufacture.fulfilled, (state, action) => {
      state.manufactures = state.manufactures.map((manufacture) => {
        if (manufacture.id === action.payload.id) {
          return action.payload;
        }
        return manufacture;
      });
      state.loading = false;
      state.error = null;
    });
    builder.addCase(editManufacture.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(editManufacture.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteManufacture.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteManufacture.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.manufactures = state.manufactures.filter(
        (manufacture) => manufacture.id !== action.payload.id
      );
    });
    builder.addCase(deleteManufacture.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default manufacturesSlice.reducer;
