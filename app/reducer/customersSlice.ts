import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { Params } from "./vehiclesSlice";

export const fetchCustomers = createAsyncThunk(
  "customers/fetchCustomers",
  async (params: Params | null, thunkAPI) => {
    const { page, size } = params;
    const url =
      !page && !size
        ? "/api/customers"
        : `/api/customers?page=${page}&size=${size}`;
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
export const createCustomer = createAsyncThunk(
  "customers/createCustomer",
  async ({ customer, router }: any, thunkAPI) => {
    try {
      const { data } = await axios.post("/api/customers", customer);
      toast.success("customer Added");
      router.push("/customers");
      return data;
    } catch (error) {
      const msg =
        error?.response?.data?.message ||
        error?.message ||
        "Error adding customer";
      toast.error(msg);
      return thunkAPI.rejectWithValue(msg);
    }
  }
);
export const editCustomer = createAsyncThunk(
  "customers/editCustomer",
  async ({ customer, router }: any, thunkAPI) => {
    try {
      const { data } = await axios.put(
        `/api/customers/${customer.id}`,
        customer
      );
      toast.success("customer Saved");
      router.push("/customers");
      return data;
    } catch (error) {
      const msg =
        error?.response?.data?.message ||
        error?.message ||
        "Error Saving customer";
      toast.error(msg);
      return thunkAPI.rejectWithValue(msg);
    }
  }
);
export const deleteCustomer = createAsyncThunk(
  "customers/deleteCustomer",
  async (id: number, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/api/customers/${id}`);
      toast.success("Customer deleted");
      return data;
    } catch (error) {
      console.log(error);
      const msg =
        error?.response?.data?.message ||
        error?.message ||
        "Error deleting Customer";
      toast.error(msg);
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

const initialState = {
  customers: [],
  meta: {
    page: 0,
    size: 5,
    totalPages: 0,
  },
  loading: false,
  error: null,
};
const customersSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    // ... other reducers ...
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCustomers.fulfilled, (state, action) => {
      state.customers = action.payload.customers;
      state.meta = action.payload.meta;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchCustomers.pending, (state) => {
      state.customers = [];
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCustomers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.customers = [];
    });
    builder.addCase(createCustomer.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(createCustomer.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createCustomer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(editCustomer.fulfilled, (state, action) => {
      state.customers = state.customers.map((vehicle) => {
        if (vehicle.id === action.payload.id) {
          return action.payload;
        }
        return vehicle;
      });
      state.loading = false;
      state.error = null;
    });
    builder.addCase(editCustomer.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(editCustomer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteCustomer.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteCustomer.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.customers = state.customers.filter(
        (customer) => customer.id !== action.payload.id
      );
    });
    builder.addCase(deleteCustomer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default customersSlice.reducer;
