import { Document, Page, Font, View, PDFViewer } from "@react-pdf/renderer";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getVehicleById } from "../../../app/reducer/vehicleSlice";
import NotFound from "../../../components/NotFound";
import Spinner from "../../../components/Spinner";
import { styles } from "../../../components/pdfReport/styles";
import PageThree from "../../../components/pdfReport/PageThree";
import PageTwo from "../../../components/pdfReport/PageTwo";
import Header from "../../../components/pdfReport/Header";
import Footer from "../../../components/pdfReport/Footer";
import FirstPage from "../../../components/pdfReport/FirstPage";
import { testLimits } from "../../../data";
import { addLeadingZeros, completeTests } from "../../../utils";
Font.register({
  family: "Open Sans",
  src: "https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Me5Q.ttf",
  fontWeight: "normal",
});
Font.register({
  family: "Open Sans",
  src: "https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmEU9vAw.ttf",
  fontWeight: "medium",
});
Font.register({
  family: "Open Sans",
  src: "https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlvAw.ttf",
  fontWeight: "bold",
});
Font.register({
  family: "Noto Naskh Arabic",
  src: "https://fonts.gstatic.com/s/notonaskharabic/v16/RrQ5bpV-9Dd1b1OAGA6M9PkyDuVBePeKNaxcsss0Y7bwvc5krA.ttf",
  fontWeight: "normal",
});
Font.register({
  family: "Noto Naskh Arabic",
  src: "https://fonts.gstatic.com/s/notonaskharabic/v16/RrQ5bpV-9Dd1b1OAGA6M9PkyDuVBePeKNaxcsss0Y7bwj85krA.ttf",
  fontWeight: "medium",
});
Font.register({
  family: "Noto Naskh Arabic",
  src: "https://fonts.gstatic.com/s/notonaskharabic/v16/RrQ5bpV-9Dd1b1OAGA6M9PkyDuVBePeKNaxcsss0Y7bwWslkrA.ttf",
  fontWeight: "bold",
});
// Create styles

// Create Document Component
function Report() {
  const dispatch = useAppDispatch();
  const { loading, error, vehicle } = useAppSelector((state) => state.vehicle);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (router.isReady && id) {
      dispatch(getVehicleById(id));
    }
  }, [id, dispatch, router.isReady]);
  if (loading) return <Spinner />;
  if (error) return <p>error </p>;
  if (!vehicle) return <NotFound />;
  if (!completeTests(vehicle)) {
    return <p>Please complete all test results</p>;
  }
  const tests = [
    vehicle.visualInspection,
    vehicle.emissionTest,
    vehicle.highBeamLevel,
    vehicle.sideSlip,
    vehicle.suspensionTest,
    vehicle.brakeTest,
  ];
  return (
    <PDFViewer style={styles.viewer}>
      <Document title={"TD" + addLeadingZeros(vehicle.id, 5)} language="arabic">
        <Page size="A4" style={styles.page}>
          <View fixed>
            <Header vehicle={vehicle} />
          </View>
          <FirstPage vehicle={vehicle} />
          <View break />
          <PageTwo vehicle={vehicle} />
          <View break />
          <PageThree vehicle={vehicle} />
          <View fixed>
            <Footer />
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default Report;
