import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { categories, condition, fuelTypes, gearTypes } from "../data";

const VehicleInfoEditForm = ({ initialState }) => {
  const router = useRouter();
  const { id } = router.query;
  const [colors, setColors] = useState([]);
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [vehicleInfo, setVehicleInfo] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicleInfo({ ...vehicleInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `/api/vehiclesInfo/${vehicleInfo.id}`,
        vehicleInfo
      );
      toast.success("Vehicle info updated");
      router.push(`/vehicles/${id}/result`);
    } catch (error) {
      const msg = error?.response?.data?.message || "Error Saving Vehicle Info";
      toast.error(msg);
    }
  };

  useEffect(() => {
    axios.get("/api/colors").then((res) => setColors(res.data?.colors));
    axios
      .get("/api/vehicleTypes")
      .then((res) => setVehicleTypes(res.data.vehicleTypes));
  }, []);

  return (
    <>
      <h1 className="mt-8 mb-8 text-center text-xl font-bold text-gray-700 underline dark:text-white ">
        Edit Vehicle Info
      </h1>
      <form
        className="grid gap-6 sm:grid-cols-4 md:grid-cols-6"
        onSubmit={handleSubmit}
      >
        <div className="col-span-6 md:col-span-3 lg:col-span-2">
          <label
            htmlFor="colorId"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Color :
          </label>
          <select
            onChange={(e) =>
              setVehicleInfo({
                ...vehicleInfo,
                colorId: Number(e.target.value),
              })
            }
            value={vehicleInfo.colorId}
            id="colorId"
            name="colorId"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={0}>Select Color</option>
            {colors.map((color) => (
              <option value={color.id} key={color.id}>
                {color.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-2">
          <label
            htmlFor="vehicleType"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Vehicle Type :
          </label>
          <select
            onChange={(e) =>
              setVehicleInfo({
                ...vehicleInfo,
                vehicleTypeId: Number(e.target.value),
              })
            }
            value={vehicleInfo.vehicleTypeId}
            id="vehicleType"
            name="vehicleTypeId"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={0}>Select Vehicle Type</option>
            {vehicleTypes.map((type) => (
              <option value={type.id} key={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-2">
          <label
            htmlFor="condition"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Condition :
          </label>
          <select
            onChange={handleChange}
            value={vehicleInfo.condition}
            id="condition"
            name="condition"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            {condition.map((item) => (
              <option value={item.name} key={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-2">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Category :
          </label>
          <select
            onChange={handleChange}
            value={vehicleInfo.category}
            id="category"
            name="category"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            {categories.map((item) => (
              <option value={item.name} key={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-2">
          <label
            htmlFor="fuelType"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Fuel Type :
          </label>
          <select
            onChange={handleChange}
            value={vehicleInfo.fuelType}
            id="fuelType"
            name="fuelType"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            {fuelTypes.map((item) => (
              <option value={item.name} key={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-2">
          <label
            htmlFor="gear"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Gear Type :
          </label>
          <select
            onChange={handleChange}
            value={vehicleInfo.gear}
            id="gear"
            name="gear"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            {gearTypes.map((item) => (
              <option value={item.name} key={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-2 ">
          <label
            htmlFor="year"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Model Year:
          </label>
          <input
            onChange={handleChange}
            value={vehicleInfo.year}
            type="text"
            name="year"
            id="year"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
          />
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-2 ">
          <label
            htmlFor="engine"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Engine Info:
          </label>
          <input
            onChange={handleChange}
            value={vehicleInfo.engine}
            type="text"
            name="engine"
            id="engine"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
          />
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-2 ">
          <label
            htmlFor="engineSize"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Engine Size:
          </label>
          <input
            onChange={handleChange}
            value={vehicleInfo.engineSize}
            type="text"
            name="engineSize"
            id="engineSize"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
          />
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-2 ">
          <label
            htmlFor="seats"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Seats :
          </label>
          <input
            onChange={handleChange}
            value={vehicleInfo.seats}
            type="text"
            name="seats"
            id="seats"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
          />
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-2 ">
          <label
            htmlFor="mileage"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Mileage:
          </label>
          <input
            onChange={handleChange}
            value={vehicleInfo.mileage}
            type="text"
            name="mileage"
            id="mileage"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
          />
        </div>

        <div className="col-span-6 my-8 flex flex-col-reverse gap-2 md:flex-row md:justify-end ">
          <button
            onClick={() => router.push(`/vehicles/${id}/result`)}
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

export default VehicleInfoEditForm;
