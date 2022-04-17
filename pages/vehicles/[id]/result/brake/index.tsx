import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import { getVehicleById } from "../../../../../app/reducer/vehicleSlice";
import BrakeCreateForm from "../../../../../components/BrakeCreateForm";
import BrakeEditForm from "../../../../../components/BrakeEditForm";
import NotFound from "../../../../../components/NotFound";
import Spinner from "../../../../../components/Spinner";
const Brake = () => {
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
      {vehicle.brakeTest !== null ? (
        <BrakeEditForm vehicle={vehicle} />
      ) : (
        <BrakeCreateForm vehicle={vehicle} />
      )}
    </div>
  );
};

export default Brake;
