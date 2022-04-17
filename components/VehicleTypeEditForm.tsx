import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchManufactures } from "../app/reducer/manufacturesSlice";
import { editType } from "../app/reducer/vehicleTypesSlice";
import Spinner from "./Spinner";

const VehicleTypeEditForm = ({ initialState }) => {
  const dispatch = useAppDispatch();
  const { loading, manufactures } = useAppSelector(
    (state) => state.manufactures
  );
  const router = useRouter();
  const [type, setType] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setType({ ...type, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(editType({ type, router }));
  };

  useEffect(() => {
    dispatch(fetchManufactures({}));
  }, [dispatch]);
  if (loading) return <Spinner />;

  return (
    <div className="mx-auto max-w-md">
      <h1 className="mt-8 mb-8 text-center text-xl font-bold text-gray-700 underline dark:text-white ">
        Create New Vehicle Type
      </h1>
      <form className="" onSubmit={handleSubmit}>
        <div className="mb-8 ">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={type.name}
            onChange={handleChange}
            id="name"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="manufacturer"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Manufacturer :
          </label>
          <select
            onChange={(e: any) =>
              setType({ ...type, manufacturerId: Number(e.target.value) })
            }
            value={type.manufacturerId}
            id="manufacturer"
            name="manufacturer"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            {manufactures.map((item) => (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className=" mt-16 flex flex-col-reverse gap-2    md:flex-row ">
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

export default VehicleTypeEditForm;
