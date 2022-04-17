import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import { getVehicleById } from "../../../../../app/reducer/vehicleSlice";
import NotFound from "../../../../../components/NotFound";
import Spinner from "../../../../../components/Spinner";
import SuspensionCreateForm from "../../../../../components/SuspensionCreateForm";
import SuspensionEditForm from "../../../../../components/SuspensionEditForm";
const Suspension = () => {
  const dispatch = useAppDispatch();
  const { loading, error, vehicle } = useAppSelector((state) => state.vehicle);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (router.isReady && id) {
      dispatch(getVehicleById(id));
    }
  }, [id, dispatch, router.isReady]);
  if (loading) return <Spinner />;
  if (error) return <p>error </p>;
  if (!vehicle) return <NotFound />;

  return (
    <div>
      {vehicle.suspensionTest !== null ? (
        <SuspensionEditForm vehicle={vehicle} />
      ) : (
        <SuspensionCreateForm vehicle={vehicle} />
      )}
    </div>
  );
};

export default Suspension;
