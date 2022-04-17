import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import { getVehicleById } from "../../../../../app/reducer/vehicleSlice";
import EmissionTestCreateForm from "../../../../../components/EmissionTestCreateForm";
import EmissionTestEditForm from "../../../../../components/EmissionTestEditForm";
import Message from "../../../../../components/Message";
import NotFound from "../../../../../components/NotFound";
import Spinner from "../../../../../components/Spinner";
const EmissonTest = () => {
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

  if (!vehicle.vehicleInfo)
    return <Message type="error" msg="Vehicle Info not found" />;

  return (
    <div>
      {vehicle.emissionTest !== null ? (
        <EmissionTestEditForm vehicle={vehicle} />
      ) : (
        <EmissionTestCreateForm vehicle={vehicle} />
      )}
    </div>
  );
};

export default EmissonTest;
