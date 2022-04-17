import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { deleteType, fetchTypes } from "../../app/reducer/vehicleTypesSlice";
import Pagination from "../../components/Pagination";
import Spinner from "../../components/Spinner";

const VehicleTypesList = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loading, error, vehicleTypes, meta } = useAppSelector(
    (state) => state.vehicleTypes
  );
  const [page, setPage] = useState(meta.page || 1);
  const [size, setSize] = useState(meta.size || 5);
  const [query, setQuery] = useState("");

  const handleDelete = async (id) => {
    const confirmed = confirm("Are you sure you want to delete this Type?");
    if (!confirmed) return;
    dispatch(deleteType(id));
  };
  useEffect(() => {
    dispatch(fetchTypes({ page, size }));
  }, [dispatch, page, size]);
  if (loading) return <Spinner />;
  if (!vehicleTypes) return <div>no data</div>;
  if (error) return <p>{error.message}</p>;
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
                  placeholder="Search ..."
                />
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
                onClick={() => router.push("/vehicleTypes/create")}
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
                    Name
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400"
                  >
                    Manufacturer
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400"
                  >
                    Edit
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400"
                  >
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
                {vehicleTypes.map((type) => (
                  <tr
                    key={type.id}
                    className="hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <td className="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                      {type.name}
                    </td>
                    <td className="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-500 dark:text-white">
                      {type.manufacturer?.name}
                    </td>
                    <td className="whitespace-nowrap py-4 px-6  text-sm font-medium">
                      <Link href={`${router.route}/${type.id}`}>
                        <a className="text-blue-700">
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            ></path>
                          </svg>
                        </a>
                      </Link>
                    </td>
                    <td className="whitespace-nowrap py-4 px-6  text-sm font-medium">
                      <button
                        className="text-red-700"
                        onClick={() => handleDelete(type.id)}
                      >
                        <svg
                          className="h-6 w-6 "
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          ></path>
                        </svg>
                      </button>
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

export default VehicleTypesList;
