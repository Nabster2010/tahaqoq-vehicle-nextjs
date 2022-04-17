import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import { getVehicleById } from "../../../../../app/reducer/vehicleSlice";
import HighBeamCreateForm from "../../../../../components/HighBeamCreateForm";
import HighBeamEditForm from "../../../../../components/HighBeamEditForm";
import NotFound from "../../../../../components/NotFound";
import Spinner from "../../../../../components/Spinner";
const HighBeamLevel = () => {
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
      {vehicle.highBeamLevel !== null ? (
        <HighBeamEditForm vehicle={vehicle} />
      ) : (
        <HighBeamCreateForm vehicle={vehicle} />
      )}
    </div>
  );
};

export default HighBeamLevel;
