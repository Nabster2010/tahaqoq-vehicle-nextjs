import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Spinner from "../components/Spinner";

export default function Register() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <Spinner />;
  }
  if (status === "authenticated" && session !== null) {
    router.push("/");
  }

  return <div>Register</div>;
}

// export async function getServerSideProps(ctx) {
//   const session = await getSession(ctx);
//   if (session !== null) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: {},
//   };
// }
