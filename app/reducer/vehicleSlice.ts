import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getVehicleById = createAsyncThunk(
  "vehicle/getVehicleById",
  async (vehicleId, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/vehicles/${vehicleId}`);
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

interface InitialState {
  vehicle: any;
  loading: boolean;
  error: string | null;
}
const initialState: InitialState = {
  vehicle: {},
  loading: false,
  error: null,
};
const vehicleSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {
    // ... other reducers ...
  },
  extraReducers: (builder) => {
    builder.addCase(getVehicleById.fulfilled, (state, action) => {
      state.vehicle = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getVehicleById.pending, (state) => {
      state.vehicle = {};
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getVehicleById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.vehicle = {};
    });
  },
});

export default vehicleSlice.reducer;
