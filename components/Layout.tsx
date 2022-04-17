import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Spinner from "./Spinner";

const Layout = ({ children }) => {
  const router = useRouter();
  const { status, data: session } = useSession();
  if (status === "loading") {
    return <Spinner />;
  }
  if (!session) {
    signIn();
  }
  const isReportPage = router.pathname.startsWith("/reports/[id]");
  if (isReportPage) return <ReportLayout>{children}</ReportLayout>;
  return (
    <div className=" flex min-h-screen flex-col bg-[#F9FAFB]  dark:bg-primary">
      <Navbar />
      <main className=" mt-8  flex-1 px-4 shadow-sm dark:text-white ">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

const ReportLayout = ({ children }) => {
  return <div>{children}</div>;
};
