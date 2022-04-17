import { useRouter } from "next/router";
import React from "react";
interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const router = useRouter();

  const nextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };
  const previousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };
  return (
    <nav>
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <button
            disabled={currentPage === 1}
            onClick={previousPage}
            className="ml-0 rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Previous
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, i) => (
          <li key={i}>
            <button
              onClick={() => {
                onPageChange(i + 1);
              }}
              className={`border border-gray-300 py-2 px-3 leading-tight hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700     dark:hover:bg-gray-700 dark:hover:text-white  ${
                currentPage === i + 1
                  ? "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-white"
                  : "bg-white text-gray-400 dark:bg-gray-800 dark:text-gray-400"
              }`}
            >
              {i + 1}
            </button>
          </li>
        ))}

        <li>
          <button
            disabled={currentPage === totalPages}
            onClick={nextPage}
            className="  rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
