import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import vehiclesReducer from "./reducer/vehiclesSlice";
import vehicleReducer from "./reducer/vehicleSlice";
import customersReducer from "./reducer/customersSlice";
import manufacturesReducer from "./reducer/manufacturesSlice";
import vehicleTypesReducer from "./reducer/vehicleTypesSlice";
import colorsReducer from "./reducer/colorsSlice";
export function makeStore() {
  return configureStore({
    reducer: {
      vehicles: vehiclesReducer,
      vehicle: vehicleReducer,
      customers: customersReducer,
      manufactures: manufacturesReducer,
      vehicleTypes: vehicleTypesReducer,
      colors: colorsReducer,
    },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
