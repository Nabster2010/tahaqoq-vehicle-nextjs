import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { createCustomer } from "../app/reducer/customersSlice";
const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  customerType: "",
  website: "",
  taxId: "",
};
const CustomerCreateForm = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [customer, setCustomer] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createCustomer({ customer, router }));
  };
  return (
    <div>
      <h1 className="mt-8 mb-8 text-center text-xl font-bold text-gray-700 underline dark:text-white ">
        Create New Customer
      </h1>
      <form
        className="grid gap-6 sm:grid-cols-4 md:grid-cols-6"
        onSubmit={handleSubmit}
      >
        <div className="col-span-6 mt-4 flex items-center  gap-6 ">
          <div className="flex items-center">
            <input
              checked={customer.customerType === "company"}
              onChange={handleChange}
              id="company"
              value="company"
              name="customerType"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-blue-700"
            />
            <label
              htmlFor="company"
              className="ml-3 block text-sm font-medium text-gray-700 dark:text-white"
            >
              COMPANY
            </label>
          </div>
          <div className="flex items-center">
            <input
              checked={customer.customerType === "individual"}
              onChange={handleChange}
              value="individual"
              name="customerType"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-blue-700"
            />
            <label
              htmlFor="individual"
              className="ml-3 block text-sm font-medium text-gray-700 dark:text-white"
            >
              INDIVIDUAL
            </label>
          </div>
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-2 ">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={customer.name}
            onChange={handleChange}
            id="name"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
          />
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-2 ">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Email:
          </label>
          <input
            type="email"
            value={customer.email}
            onChange={handleChange}
            name="email"
            id="email"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
          />
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-2 ">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Phone:
          </label>
          <input
            type="text"
            value={customer.phone}
            onChange={handleChange}
            name="phone"
            id="phone"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
          />
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-2 ">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Address:
          </label>
          <input
            type="text"
            value={customer.address}
            onChange={handleChange}
            name="address"
            id="address"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
          />
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-2 ">
          <label
            htmlFor="website"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Website:
          </label>
          <input
            type="text"
            value={customer.website}
            onChange={handleChange}
            name="website"
            id="website"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
          />
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-2 ">
          <label
            htmlFor="taxId"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Tax ID:
          </label>
          <input
            type="text"
            value={customer.taxId}
            onChange={handleChange}
            name="taxId"
            id="taxId"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
          />
        </div>
        <div className="col-span-6 mt-16 flex flex-col gap-2 md:col-span-3  md:col-start-4  md:flex-row lg:col-span-2 lg:col-start-5">
          <button
            onClick={() => router.back()}
            type="button"
            className="inline-flex w-full items-center justify-center rounded-lg bg-red-700 px-10 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 "
          >
            Cancel
          </button>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-lg bg-blue-700 px-10 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerCreateForm;
