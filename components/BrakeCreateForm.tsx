import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { testLimits } from "../data";
import { getBrakeTestResult } from "../utils";
import Indicator from "./Indicator";

const initialState = {
  parking: "",
  front: "",
  rear: "",
};

const BrakeCreateForm = ({ vehicle }) => {
  const router = useRouter();
  const { id } = router.query;
  const [brake, setBrake] = useState<any>(initialState);

  const handleChange = (e) => {
    setBrake({ ...brake, [e.target.name]: Number(e.target.value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const brakeResult = getBrakeTestResult(brake);
    const { parking, front, rear } = brake;
    if (!parking || !front || !rear) {
      toast.error("please provide all the fields");
      return;
    }

    try {
      const { data } = await axios.post("/api/brake", {
        vehicleId: Number(id),
        ...brake,
        result: brakeResult,
      });
      router.push(`/vehicles/${id}/result`);
      toast.success(`Brake test result has been saved`);
    } catch (error) {
      const msg = error?.response?.data?.message || "Error saving results";
      toast.error(msg);
    }
  };
  return (
    <div className="mx-auto">
      <h1 className="mt-8 mb-8 text-center text-xl font-bold text-gray-700 underline dark:text-white ">
        Brake test Result
      </h1>
      <form className="" onSubmit={handleSubmit}>
        <table className="min-w-full table-auto divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th
                scope="col"
                className="py-3 px-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400"
              >
                Test
              </th>
              <th
                scope="col"
                className=" py-3 px-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400 "
              >
                Limits
              </th>
              <th
                scope="col"
                className="py-3 px-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400"
              >
                Value
              </th>
              <th
                scope="col"
                className=" py-3 px-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400"
              >
                Result
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
            <tr className="">
              <td className="whitespace-nowrap py-4 px-3 text-sm font-medium text-gray-900 dark:text-white">
                Parking Brake
              </td>
              <td className=" whitespace-nowrap py-4 px-3 text-sm font-medium text-gray-500 dark:text-white ">
                &le; {testLimits.parkingBrake}%
              </td>
              <td className="whitespace-nowrap py-4 px-3 text-sm font-medium text-gray-900 dark:text-white">
                <input
                  type="number"
                  name="parking"
                  value={brake.parking}
                  onChange={handleChange}
                  id="parking"
                  className=" mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
                />
              </td>
              <td className="whitespace-nowrap py-4 px-3 text-sm font-medium text-gray-900 dark:text-white">
                <Indicator value={brake.parking <= testLimits.parkingBrake} />
              </td>
            </tr>
            <tr className="">
              <td className="whitespace-nowrap py-4 px-3 text-sm font-medium text-gray-900 dark:text-white">
                Front Brake
              </td>
              <td className=" whitespace-nowrap py-4 px-3 text-sm font-medium text-gray-500 dark:text-white ">
                &le; {testLimits.serviceBrake}%
              </td>
              <td className="whitespace-nowrap py-4 px-3 text-sm font-medium text-gray-900 dark:text-white">
                <input
                  type="number"
                  name="front"
                  value={brake.front}
                  onChange={handleChange}
                  id="front"
                  className=" mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
                />
              </td>
              <td className="whitespace-nowrap py-4 px-3 text-sm font-medium text-gray-900 dark:text-white">
                <Indicator value={brake.front <= testLimits.serviceBrake} />
              </td>
            </tr>
            <tr className="">
              <td className="whitespace-nowrap py-4 px-3 text-sm font-medium text-gray-900 dark:text-white">
                Rear brake
              </td>
              <td className=" whitespace-nowrap py-4 px-3 text-sm font-medium text-gray-500 dark:text-white ">
                &le; {testLimits.serviceBrake}%
              </td>
              <td className="whitespace-nowrap py-4 px-3 text-sm font-medium text-gray-900 dark:text-white">
                <input
                  type="number"
                  name="rear"
                  value={brake.rear}
                  onChange={handleChange}
                  id="rear"
                  className=" mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
                />
              </td>
              <td className="whitespace-nowrap py-4 px-3 text-sm font-medium text-gray-900 dark:text-white">
                <Indicator value={brake.rear <= testLimits.serviceBrake} />
              </td>
            </tr>
          </tbody>
        </table>

        <div className=" mt-16 flex flex-col-reverse gap-2 md:flex-row md:justify-end ">
          <button
            onClick={() => router.back()}
            type="button"
            className="inline-flex w-full items-center justify-center rounded-lg bg-red-700 px-10 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 md:w-auto "
          >
            Cancel
          </button>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-lg bg-blue-700 px-10 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  md:w-auto "
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default BrakeCreateForm;
