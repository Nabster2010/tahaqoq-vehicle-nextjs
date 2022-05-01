import { useSession } from "next-auth/react";
import Head from "next/head";
import Spinner from "../components/Spinner";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Spinner />;
  }
  if (!session) {
    return (
      <div className="flex items-center justify-center">
        <div className="border border-red-400 px-8 py-12">
          <p>You are not logged in please login to start</p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Head>
        <title>Tahaqoq Vehicles Inspection Center</title>
        <meta name="description" content="Tahaqoq Vehicles Inspection" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex items-center justify-center">
          <div className="border border-green-400 px-8 py-12">
            <p>Welcome to Tahaqoq Vehicle inspection Application</p>
            <p>
              Loggedin user :{session.user.name} - {session.user.email} -
              {session.user.name}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
