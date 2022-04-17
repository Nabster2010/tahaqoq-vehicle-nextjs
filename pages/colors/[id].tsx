import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ColorEditForm from "../../components/ColorEditForm";
import NotFound from "../../components/NotFound";
import Spinner from "../../components/Spinner";

const ViewColor = () => {
  const router = useRouter();
  const { id } = router.query;
  const [color, setColor] = useState(null);
  const [laoding, setLaoding] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (router.isReady) {
      try {
        axios.get(`/api/colors/${id}`).then((res) => {
          setColor(res.data);
        });
      } catch (err) {
        setError(err);
      } finally {
        setLaoding(false);
      }
    }
  }, [router.isReady, id]);
  if (laoding || !color) return <Spinner />;
  if (error) return <NotFound />;
  return <ColorEditForm initialState={color} />;
};

export default ViewColor;
