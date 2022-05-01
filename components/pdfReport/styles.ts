import { StyleSheet, PDFViewer } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    color: "#000",
    padding: 20,
    fontSize: 16,
    fontFamily: "Noto Naskh Arabic",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderBottom: "1px solid #000",
    paddingBottom: 10,
  },
  logo: {
    width: 70,
  },
  text: {
    fontFamily: "Noto Naskh Arabic",
    textAlign: "right",
  },
  viewer: {
    width: "100vw", //the pdf viewer will take up all of the width and height
    height: "100vh",
  },
  headerText: {
    fontWeight: "medium",
    display: "flex",
    alignSelf: "center",
    fontSize: 14,
  },
  englishText: {
    fontFamily: "Open Sans",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
