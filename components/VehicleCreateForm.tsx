import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchCustomers } from "../app/reducer/customersSlice";
import { createVehicle } from "../app/reducer/vehiclesSlice";
import { paymentMethods, ports } from "../data";
import Spinner from "./Spinner";

const VehicleCreateForm = ({ initialState }) => {
  const dispatch = useAppDispatch();
  const { loading, customers } = useAppSelector((state) => state.customers);
  const router = useRouter();
  const [vehicle, setVehicle] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicle({ ...vehicle, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createVehicle({ vehicle, router }));
  };

  useEffect(() => {
    dispatch(fetchCustomers({}));
  }, [dispatch]);
  if (loading) return <Spinner />;
  return (
    <>
      <h1 className="mt-8 mb-8 text-center text-xl font-bold text-gray-700 underline dark:text-white ">
        Create New Vehicle
      </h1>
      <form
        className="grid gap-6 sm:grid-cols-4 md:grid-cols-6"
        onSubmit={handleSubmit}
      >
        <div className="col-span-6 md:col-span-3 lg:col-span-2">
          <label
            htmlFor="customerId"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Customer :
          </label>
          <select
            onChange={(e) =>
              setVehicle({ ...vehicle, customerId: Number(e.target.value) })
            }
            value={vehicle.customerId}
            id="customerId"
            name="customerId"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={0}>Select Customer</option>
            {customers.map((customer) => (
              <option value={customer.id} key={customer.id}>
                {customer.name}
              </option>
            ))}
          </select>
        </div>

        <div className="col-span-6 md:col-span-3 lg:col-span-2 ">
          <label
            htmlFor="reqNo"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Request No:
          </label>
          <input
            onChange={handleChange}
            value={vehicle.reqNo}
            type="text"
            name="reqNo"
            id="reqNo"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
          />
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-2 ">
          <label
            htmlFor="reqDate"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Request Date:
          </label>
          <input
            onChange={handleChange}
            value={vehicle.reqDate}
            type="date"
            name="reqDate"
            id="reqDate"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
          />
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-2 ">
          <label
            htmlFor="bayanNo"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Bayan No:
          </label>
          <input
            onChange={handleChange}
            value={vehicle.bayanNo}
            type="text"
            name="bayanNo"
            id="bayanNo"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
          />
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-2 ">
          <label
            htmlFor="bayanDate"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Bayan Date:
          </label>
          <input
            onChange={handleChange}
            value={vehicle.bayanDate}
            type="date"
            name="bayanDate"
            id="bayanDate"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
          />
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-2">
          <label
            htmlFor="port"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Port :
          </label>
          <select
            onChange={handleChange}
            value={vehicle.port}
            id="port"
            name="port"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="">Select Port</option>
            {ports.map((port) => (
              <option value={port.tName} key={port.id}>
                {port.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-2 ">
          <label
            htmlFor="vin"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Chassis No:
          </label>
          <input
            onChange={handleChange}
            value={vehicle.vin}
            type="text"
            name="vin"
            id="vin"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
          />
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-2">
          <label
            htmlFor="paymentType"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Payment Type :
          </label>
          <select
            onChange={handleChange}
            value={vehicle.paymentType}
            id="paymentType"
            name="paymentType"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="">Select Payment Method</option>
            {paymentMethods.map((method) => (
              <option value={method.name} key={method.id}>
                {method.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-2 ">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Price :
          </label>
          <input
            onChange={handleChange}
            value={vehicle.price}
            type="number"
            name="price"
            id="price"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
          />
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-2 ">
          <label
            htmlFor="tax"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Vat :
          </label>
          <input
            onChange={handleChange}
            value={vehicle.tax}
            type="number"
            name="tax"
            id="tax"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
          />
        </div>
        <div className="col-span-6 my-8 flex flex-col-reverse gap-2 md:flex-row md:justify-end ">
          <button
            onClick={() => router.push("/vehicles")}
            type="button"
            className="inline-flex w-full items-center justify-center rounded-lg bg-red-700 px-10 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 md:w-auto"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-lg bg-blue-700 px-10 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:w-auto"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default VehicleCreateForm;
