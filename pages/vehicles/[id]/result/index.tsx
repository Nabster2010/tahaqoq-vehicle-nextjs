import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { getVehicleById } from "../../../../app/reducer/vehicleSlice";
import NotFound from "../../../../components/NotFound";
import Spinner from "../../../../components/Spinner";
import Image from "next/image";
const ResultPage = () => {
  const { query, isReady, push, asPath } = useRouter();
  const dispatch = useAppDispatch();
  const { vehicle, loading, error } = useAppSelector((state) => state.vehicle);

  useEffect(() => {
    if (isReady && query.id) {
      dispatch(getVehicleById(query.id));
    }
  }, [query.id, isReady, dispatch]);

  if (loading) return <Spinner />;
  if (error) return <p>error</p>;
  if (!vehicle) return <NotFound />;
  return (
    <div className=" px-4 md:px-12 ">
      <div className="flex flex-col items-center justify-center gap-8 bg-white py-12 px-4 shadow-md">
        <h1 className="text-xl font-bold text-gray-500">
          Result Page for Vehicle No# {vehicle?.id}
        </h1>
        <div className=" flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() =>
              push({
                pathname: `${asPath}/vehicleInfo`,
              })
            }
            className={
              " flex h-32 w-32 transform flex-col items-center justify-center gap-2 rounded-xl border-b-8  bg-gray-200 p-2 shadow-md transition hover:scale-105 hover:bg-gray-300 " +
              (vehicle.vehicleInfo ? "border-green-700" : "border-red-700")
            }
          >
            <Image
              src="/images/vehicleInfo.png"
              width={40}
              height={40}
              alt=""
            />

            <h4 className="text-center font-semibold text-gray-600 ">
              Vehicle Info
            </h4>
          </button>
          <button
            onClick={() =>
              push({
                pathname: `${asPath}/visualInspection`,
              })
            }
            className={
              " flex h-32 w-32 transform flex-col items-center justify-center gap-2 rounded-xl border-b-8  bg-gray-200 p-2 shadow-md transition hover:scale-105 hover:bg-gray-300 " +
              (vehicle.visualInspection ? "border-green-700" : "border-red-700")
            }
          >
            <Image
              src="/images/visualInspection.png"
              width={40}
              height={40}
              alt=""
            />

            <h4 className="text-center font-semibold text-gray-600 ">
              Visual Inspection
            </h4>
          </button>
          <button
            onClick={() =>
              push({
                pathname: `${asPath}/emission`,
              })
            }
            className={
              " flex h-32 w-32 transform flex-col items-center justify-center gap-2 rounded-xl border-b-8  bg-gray-200 p-2 shadow-md transition hover:scale-105 hover:bg-gray-300 " +
              (vehicle.emissionTest ? "border-green-700" : "border-red-700")
            }
          >
            <Image src="/images/emission.png" width={40} height={40} alt="" />

            <h4 className="text-center font-semibold text-gray-600 ">
              Emission Test
            </h4>
          </button>
          <button
            onClick={() =>
              push({
                pathname: `${asPath}/highBeam`,
              })
            }
            className={
              " flex h-32 w-32 transform flex-col items-center justify-center gap-2 rounded-xl border-b-8  bg-gray-200 p-2 shadow-md transition hover:scale-105 hover:bg-gray-300 " +
              (vehicle.highBeamLevel ? "border-green-700" : "border-red-700")
            }
          >
            <Image src="/images/highbeam.png" width={40} height={40} alt="" />

            <h4 className="text-center font-semibold text-gray-600 ">
              HighBeam Test
            </h4>
          </button>
          <button
            onClick={() =>
              push({
                pathname: `${asPath}/sideSlip`,
              })
            }
            className={
              " flex h-32 w-32 transform flex-col items-center justify-center gap-2 rounded-xl border-b-8  bg-gray-200 p-2 shadow-md transition hover:scale-105 hover:bg-gray-300 " +
              (vehicle.sideSlip ? "border-green-700" : "border-red-700")
            }
          >
            <Image src="/images/sideSlip.png" width={40} height={40} alt="" />

            <h4 className="text-center font-semibold text-gray-600 ">
              Side slip Test
            </h4>
          </button>
          <button
            onClick={() =>
              push({
                pathname: `${asPath}/suspension`,
              })
            }
            className={
              " flex h-32 w-32 transform flex-col items-center justify-center gap-2 rounded-xl border-b-8  bg-gray-200 p-2 shadow-md transition hover:scale-105 hover:bg-gray-300 " +
              (vehicle.suspensionTest ? "border-green-700" : "border-red-700")
            }
          >
            <Image src="/images/suspension.png" width={40} height={40} alt="" />

            <h4 className="text-center font-semibold text-gray-600 ">
              Suspension Test
            </h4>
          </button>
          <button
            onClick={() =>
              push({
                pathname: `${asPath}/brake`,
              })
            }
            className={
              " flex h-32 w-32 transform flex-col items-center justify-center gap-2 rounded-xl border-b-8  bg-gray-200 p-2 shadow-md transition hover:scale-105 hover:bg-gray-300 " +
              (vehicle.brakeTest ? "border-green-700" : "border-red-700")
            }
          >
            <Image src="/images/brake.png" width={40} height={40} alt="" />

            <h4 className="text-center font-semibold text-gray-600 ">
              Brake Test
            </h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;

// export async function getServerSideProps(ctx) {
//   const { id } = ctx.query;
//   let vehicle = null;
//   try {
//     const { data } = await axios.get(`${process.env.API_URL}/vehicles/${id}`);
//     vehicle = data;
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
//   return {
//     props: {
//       vehicle,
//     },
//   };
// }
