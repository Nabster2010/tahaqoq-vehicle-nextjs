import Link from "next/link";

const NotFound = () => (
  <div
    className="
    flex
    h-screen
    w-screen
    items-center
    justify-center
    bg-gradient-to-r
    from-indigo-600
    to-blue-400
  "
  >
    <div className="rounded-md bg-white px-40 py-20 shadow-xl">
      <div className="flex flex-col items-center">
        <h1 className="text-9xl font-bold text-blue-600">404</h1>

        <h6 className="mb-2 text-center text-2xl font-bold text-gray-800 md:text-3xl">
          <span className="text-red-500">Oops!</span> Page not found
        </h6>

        <p className="mb-8 text-center text-gray-500 md:text-lg">
          The page you’re looking for doesn’t exist.
        </p>

        <Link href="/">
          <a className="bg-blue-100 px-6 py-2 text-sm font-semibold text-blue-800">
            Go home
          </a>
        </Link>
      </div>
    </div>
  </div>
);

export default NotFound;
