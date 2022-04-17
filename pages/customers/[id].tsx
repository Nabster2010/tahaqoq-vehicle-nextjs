import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CustomerEditForm from "../../components/CustomerEditForm";
import NotFound from "../../components/NotFound";
import Spinner from "../../components/Spinner";

const ViewCustomer = () => {
  const router = useRouter();
  const { id } = router.query;
  const [customer, setCustomer] = useState(null);
  const [laoding, setLaoding] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (router.isReady) {
      try {
        axios.get(`/api/customers/${id}`).then((res) => {
          setCustomer(res.data);
        });
      } catch (err) {
        setError(err);
      } finally {
        setLaoding(false);
      }
    }
  }, [router.isReady, id]);
  if (laoding || !customer) return <Spinner />;
  if (error) return <NotFound />;

  return <CustomerEditForm initialState={customer} />;
};

export default ViewCustomer;
