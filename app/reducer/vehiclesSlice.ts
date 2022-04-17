import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export interface Params {
  page?: number;
  size?: number;
}

export const fetchVehicles = createAsyncThunk(
  "vehicles/fetchVehicles",
  async ({ page, size }: Params, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/api/vehicles?page=${page}&size=${size}`
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
export const deleteVehicle = createAsyncThunk(
  "vehicles/deleteVehicle",
  async (id: number, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/api/vehicles/${id}`);
      toast.success("Vehicle deleted");
      return data;
    } catch (error) {
      console.log(error);
      const msg =
        error?.response?.data?.message ||
        error?.message ||
        "Error deleting vehicle";
      toast.error(msg);
      return thunkAPI.rejectWithValue(msg);
    }
  }
);
export const createVehicle = createAsyncThunk(
  "vehicles/createVehicle",
  async ({ vehicle, router }: any, thunkAPI) => {
    try {
      const { data } = await axios.post("/api/vehicles", vehicle);
      toast.success("Vehicle Added");
      router.push("/vehicles");
      return data;
    } catch (error) {
      const msg =
        error?.response?.data?.message ||
        error?.message ||
        "Error adding vehicle";
      toast.error(msg);
      return thunkAPI.rejectWithValue(msg);
    }
  }
);
export const editVehicle = createAsyncThunk(
  "vehicles/editVehicle",
  async ({ vehicle, router }: any, thunkAPI) => {
    try {
      const { data } = await axios.put(`/api/vehicles/${vehicle.id}`, vehicle);
      toast.success("Vehicle Saved");
      router.push("/vehicles");
      return data;
    } catch (error) {
      const msg =
        error?.response?.data?.message ||
        error?.message ||
        "Error Saving vehicle";
      toast.error(msg);
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

const initialState = {
  vehicles: [],
  meta: {
    page: 0,
    size: 5,
    totalPages: 0,
  },
  loading: false,
  error: null,
};
const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState,
  reducers: {
    // ... other reducers ...
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVehicles.fulfilled, (state, action) => {
      state.vehicles = action.payload.vehicles;
      state.meta = action.payload.meta;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchVehicles.pending, (state) => {
      state.vehicles = [];
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchVehicles.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.vehicles = [];
    });

    builder.addCase(deleteVehicle.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteVehicle.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.vehicles = state.vehicles.filter(
        (vehicle) => vehicle.id !== action.payload.id
      );
    });
    builder.addCase(deleteVehicle.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(createVehicle.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(createVehicle.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createVehicle.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(editVehicle.fulfilled, (state, action) => {
      state.vehicles = state.vehicles.map((vehicle) => {
        if (vehicle.id === action.payload.id) {
          return action.payload;
        }
        return vehicle;
      });
      state.loading = false;
      state.error = null;
    });
    builder.addCase(editVehicle.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(editVehicle.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default vehiclesSlice.reducer;
