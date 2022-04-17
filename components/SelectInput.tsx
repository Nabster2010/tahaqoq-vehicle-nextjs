import React from "react";
export function SelectInput({}) {
  return (
    <div className="col-span-2">
      <label
        htmlFor="customer"
        className="block text-sm font-medium text-gray-700 dark:text-white"
      >
        Select:
      </label>
      <select
        id="customer"
        name="customer"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      >
        <option>United States</option>
        <option>Canada</option>
        <option>Mexico</option>
      </select>
    </div>
  );
}
