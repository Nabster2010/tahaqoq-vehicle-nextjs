import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NotFound from "../../../components/NotFound";
import Spinner from "../../../components/Spinner";
import VehicleEditForm from "../../../components/VehicleEditForm";

const ViewVehicles = () => {
  const router = useRouter();
  const { id } = router.query;
  const [vehicle, setVehicle] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (router.isReady) {
      try {
        axios.get(`/api/vehicles/${id}`).then((res) => {
          setVehicle(res.data);
        });
      } catch (err) {
        setError(err);
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
  }, [id, router.isReady]);
  if (loading || !vehicle) return <Spinner />;

  return <VehicleEditForm initialState={vehicle} />;
};

export default ViewVehicles;
