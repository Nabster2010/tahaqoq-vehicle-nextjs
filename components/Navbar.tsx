import { useSession, signIn, signOut } from "next-auth/react";

import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const navigate = (path) => {
    router.push(path);
    setDropdown(false);
  };

  return (
    <nav className=" border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-800 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/">
          <a className="flex items-center">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Tahaqoq
            </span>
          </a>
        </Link>

        <button
          data-collapse-toggle="mobile-menu"
          onClick={() => setOpen(!open)}
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={
            " w-full md:block md:w-auto" + (open ? " block" : " hidden")
          }
          id="mobile-menu"
        >
          <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:items-center md:space-x-8 md:text-sm md:font-medium">
            {status !== "loading" && session !== null ? (
              <>
                <li>
                  <Link href="/">
                    <a className="block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white">
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/reports">
                    <a
                      href="#"
                      className="block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                    >
                      Reports
                    </a>
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setDropdown(!dropdown)}
                    className=" block w-full border-b border-gray-100 py-2 pr-4 pl-3 text-left text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                  >
                    Services
                  </button>

                  <div
                    className={
                      "z-50 my-4  list-none divide-y divide-gray-100 rounded bg-white text-base shadow  dark:divide-gray-600 dark:bg-gray-700 md:absolute" +
                      (dropdown ? " block" : " hidden")
                    }
                  >
                    <ul className="w-32 py-1">
                      <li>
                        <button
                          className="block w-full py-2  text-center text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => navigate("/vehicles")}
                        >
                          Vehicles
                        </button>
                      </li>
                      <li>
                        <button
                          className="block w-full py-2 text-center text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => navigate("/customers")}
                        >
                          Customers
                        </button>
                      </li>
                      <li>
                        <button
                          className="block w-full py-2 text-center text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => navigate("/manufactures")}
                        >
                          Manufactures
                        </button>
                      </li>
                      <li>
                        <button
                          className="block w-full py-2 text-center text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => navigate("/vehicleTypes")}
                        >
                          Vehicle Types
                        </button>
                      </li>
                      <li>
                        <button
                          className="block w-full py-2 text-center text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => navigate("/colors")}
                        >
                          Colors
                        </button>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <button
                    onClick={() => signOut()}
                    className="inline-flex w-auto rounded-md bg-blue-700  px-6 py-2  text-white shadow-md hover:bg-blue-500 "
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <button
                  onClick={() => signIn()}
                  className="inline-flex w-auto rounded-md bg-blue-700  px-6 py-2  text-white shadow-md hover:bg-blue-500 "
                >
                  Login
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
