import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NotFound from "../../components/NotFound";
import Spinner from "../../components/Spinner";
import VehicleTypeEditForm from "../../components/VehicleTypeEditForm";

const ViewType = () => {
  const router = useRouter();
  const { id } = router.query;
  const [type, setType] = useState(null);
  const [laoding, setLaoding] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (router.isReady) {
      try {
        axios.get(`/api/vehicleTypes/${id}`).then((res) => {
          setType(res.data);
        });
      } catch (err) {
        setError(err);
      } finally {
        setLaoding(false);
      }
    }
  }, [router.isReady, id]);
  if (laoding || !type) return <Spinner />;
  if (error) return <NotFound />;
  return <VehicleTypeEditForm initialState={type} />;
};

export default ViewType;
