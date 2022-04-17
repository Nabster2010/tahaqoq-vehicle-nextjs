import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ManufactureEditForm from "../../components/ManufactureEditForm";
import NotFound from "../../components/NotFound";
import Spinner from "../../components/Spinner";

const ViewManufacture = () => {
  const router = useRouter();
  const { id } = router.query;
  const [manufacture, setManufacture] = useState(null);
  const [laoding, setLaoding] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (router.isReady) {
      try {
        axios.get(`/api/manufactures/${id}`).then((res) => {
          setManufacture(res.data);
        });
      } catch (err) {
        setError(err);
      } finally {
        setLaoding(false);
      }
    }
  }, [router.isReady, id]);
  if (laoding || !manufacture) return <Spinner />;
  if (error) return <NotFound />;
  return <ManufactureEditForm initialState={manufacture} />;
};

export default ViewManufacture;
