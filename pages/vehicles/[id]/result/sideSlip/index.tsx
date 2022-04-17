import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import { getVehicleById } from "../../../../../app/reducer/vehicleSlice";
import NotFound from "../../../../../components/NotFound";
import SideSlipCreateForm from "../../../../../components/SideSlipCreateForm";
import SideSlipEditForm from "../../../../../components/SideSlipEditForm";
import Spinner from "../../../../../components/Spinner";
const SideSlip = () => {
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
      {vehicle.sideSlip !== null ? (
        <SideSlipEditForm vehicle={vehicle} />
      ) : (
        <SideSlipCreateForm vehicle={vehicle} />
      )}
    </div>
  );
};

export default SideSlip;
