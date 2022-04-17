import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Spinner from "../../../../../components/Spinner";
import VisualInspectionForm from "../../../../../components/VisualInspectionForm";

const VisualInspection = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { id, vehicleInfo } = router.query;
  if (status === "loading") return <Spinner />;
  if (!session) {
    signIn();
  }
  return (
    <div>
      <VisualInspectionForm />
    </div>
  );
};

export default VisualInspection;
