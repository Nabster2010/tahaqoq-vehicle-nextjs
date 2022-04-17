import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hooks";
import { fetchVehicles, deleteVehicle } from "../../app/reducer/vehiclesSlice";
import Pagination from "../../components/Pagination";
import Spinner from "../../components/Spinner";

const ReportsList = () => {
  const dispatch = useDispatch();
  const { vehicles, error, loading, meta } = useAppSelector(
    (state) => state.vehicles
  );
  const [page, setPage] = useState(meta.page || 1);
  const [size, setSize] = useState(meta.size || 5);
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleDelete = (id) => {
    const confirmed = confirm(
      "Are you sure you want to delete this manufacture?"
    );
    if (!confirmed) return;
    dispatch(deleteVehicle(id));
  };

  useEffect(() => {
    dispatch(fetchVehicles({ page, size }));
  }, [page, size, dispatch]);

  if (loading) return <Spinner />;
  if (!vehicles) return <p>No vehicles found</p>;

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <div className="inline-block min-w-full align-middle dark:bg-gray-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-4  p-4 md:flex-row  ">
              <label htmlFor="table-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  id="table-search"
                  className="block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Search for vehicle"
                />
              </div>
              <div className="flex items-center">
                <label
                  htmlFor="searchBy"
                  className=" text-sm font-medium text-gray-700 dark:text-white"
                >
                  Search By :
                </label>
                <select
                  id="searchBy"
                  name="searchBy"
                  className="ml-4 block rounded-lg border border-gray-300  bg-gray-50 py-2.5 pl-6 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                >
                  <option value="customerName">customer name</option>
                  <option value={"reqNo"}>Ctrl no</option>
                  <option value={"bayanNo"}>Bayan no</option>
                  <option value={"phone"}>phone</option>
                  <option value={"vin"}>vin</option>
                </select>
              </div>
              <div className="flex items-center">
                <label
                  htmlFor="size"
                  className=" text-sm font-medium text-gray-700 dark:text-white"
                >
                  limit:
                </label>
                <select
                  id="size"
                  value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                  name="size"
                  className="ml-4 block rounded-lg border border-gray-300  bg-gray-50 py-2.5 pl-6 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                </select>
              </div>
            </div>
            <div className="p-4 pt-0 md:pt-4">
              <button
                type="button"
                onClick={() => router.push("/vehicles/create")}
                className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                New
                <svg
                  className="h-6 w-6 pl-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="overflow-hidden">
            <table className="min-w-full table-fixed divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th
                    scope="col"
                    className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400"
                  >
                    No#
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400"
                  >
                    Customer
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400"
                  >
                    Ctrl No
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400"
                  >
                    Bayan No
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400"
                  >
                    Port
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400"
                  >
                    Vin
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400"
                  >
                    Invoice
                  </th>

                  <th
                    scope="col"
                    className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400"
                  >
                    Report
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
                {vehicles.map((vehicle) => (
                  <tr
                    key={vehicle.id}
                    className="hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <td className="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                      {vehicle.id}
                    </td>
                    <td className="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                      {vehicle?.customer?.name}
                    </td>
                    <td className="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-500 dark:text-white">
                      {vehicle.reqNo}
                    </td>
                    <td className="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                      {vehicle.bayanNo}
                    </td>
                    <td className="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                      {vehicle.port}
                    </td>
                    <td className="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                      {vehicle.vin}
                    </td>

                    <td className="whitespace-nowrap py-4 px-6  text-sm font-medium">
                      <Link href={`${router.route}/${vehicle.id}/invoice`}>
                        <a>invoice</a>
                      </Link>
                    </td>
                    <td className="whitespace-nowrap py-4 px-6  text-sm font-medium">
                      <Link href={`${router.route}/${vehicle.id}/report`}>
                        <a>report</a>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="my-8">
        <Pagination
          currentPage={page}
          totalPages={meta.totalPages}
          onPageChange={(page) => setPage(page)}
        />
      </div>
    </div>
  );
};
export default ReportsList;
