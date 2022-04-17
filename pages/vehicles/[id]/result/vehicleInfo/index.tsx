import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NotFound from "../../../../../components/NotFound";
import Spinner from "../../../../../components/Spinner";
import VehicleInfoCreateForm from "../../../../../components/VehicleInfoCreateForm";
import VehicleInfoEditForm from "../../../../../components/VehicleInfoEditForm";

const VehicleInfo = () => {
  const router = useRouter();
  const { id } = router.query;
  const [vehicle, setVehicle] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (id) {
      axios.get(`/api/vehicles/${id}`).then((res) => {
        setVehicle(res.data);
        setLoading(false);
      });
    }
  }, [id]);
  if (loading) return <Spinner />;

  if (!vehicle) {
    return <NotFound />;
  }

  return (
    <div>
      {vehicle.vehicleInfo ? (
        <VehicleInfoEditForm initialState={vehicle.vehicleInfo} />
      ) : (
        <VehicleInfoCreateForm />
      )}
    </div>
  );
};

export default VehicleInfo;
