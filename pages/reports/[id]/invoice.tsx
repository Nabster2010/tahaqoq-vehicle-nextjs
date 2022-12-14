import {
  Document,
  Page,
  Font,
  Text,
  Image,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getVehicleById } from "../../../app/reducer/vehicleSlice";
import NotFound from "../../../components/NotFound";
import Spinner from "../../../components/Spinner";
import { addLeadingZeros } from "../../../utils";
var QRCode = require("qrcode");

// Create styles
const styles = StyleSheet.create({
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
    alignItems: "center",
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
  headerTitle: {},

  viewer: {
    width: "100vw", //the pdf viewer will take up all of the width and height
    height: "100vh",
  },
});

Font.register({
  family: "Cairo",
  src: "https://fonts.gstatic.com/s/cairo/v17/SLXVc1nY6HkvangtZmpcWmhzfH5lWWgsQQ.ttf",
  fontWeight: "400",
});
Font.register({
  family: "Cairo",
  src: "https://fonts.gstatic.com/s/cairo/v17/SLXVc1nY6HkvangtZmpcWmhzfH5la2gsQQ.ttf",
  fontWeight: "500",
});
Font.register({
  family: "Cairo",
  src: "https://fonts.gstatic.com/s/cairo/v17/SLXVc1nY6HkvangtZmpcWmhzfH5lvm8sQQ.ttf",
  fontWeight: "700",
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
Font.register({
  family: "Open Sans",
  src: "https://fonts.gstatic.com/s/opensans/v28/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsiH0C4n.ttf",
  fontWeight: "normal",
});
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

// Create Document Component
function Invoice() {
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
  return (
    <PDFViewer style={styles.viewer}>
      <Document title={`DNV/2022/${vehicle.id}`} language="arabic">
        <Page size="A4" style={styles.page}>
          <Header />

          <InvoiceInfo vehicle={vehicle} />
          <CustomerInfo vehicle={vehicle} />
          <InvoiceItems vehicle={vehicle} />
          <InvoiceTotal vehicle={vehicle} />
          <InvoiceFooter />
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default Invoice;

const Header = () => (
  <View style={styles.header}>
    <Image style={styles.logo} src={"/images/logo.png"} />
    <View>
      <Text
        style={[
          styles.text,
          { display: "flex", alignSelf: "flex-end", fontSize: 14 },
        ]}
      >
        ???????? ???????????? ?????????????? ???????? ????????????????
      </Text>
      <Text
        style={[
          styles.text,
          {
            display: "flex",
            alignSelf: "flex-start",
            fontFamily: "Open Sans",
            fontWeight: "normal",
            fontSize: 12,
          },
        ]}
      >
        Tahaqoq International Vehicles.
      </Text>
      <Text
        style={[
          styles.text,
          {
            display: "flex",
            alignSelf: "flex-start",
            fontFamily: "Open Sans",
            fontWeight: "normal",
            fontSize: 12,
          },
        ]}
      >
        Inspection Center -Dammam
      </Text>
    </View>
  </View>
);

const InvoiceInfo = ({ vehicle }) => {
  const date = new Date(vehicle.createdAt).toLocaleDateString("en-GB");

  const invoiceData = `
  Tahaqoq international company
  invoice no: DNV/2022/${vehicle.id}
  invoiceDate: ${date}
  invoiceItems: Vehicle Inspection 
  invoiceAmount: ${vehicle.price + vehicle.tax}
  tax: ${vehicle.tax}
  tax id : 301226063500003
  `;
  const imgRef = useRef();
  var opts = {
    errorCorrectionLevel: "H",
    type: "image/jpeg",
    quality: 0.3,
  };
  QRCode.toDataURL(invoiceData, opts, function (err, url) {
    if (err) throw err;
    imgRef.current = url;
  });

  return (
    <View>
      <View
        style={{
          backgroundColor: "#E4E7EB",
          marginTop: 5,
        }}
      >
        <Text style={{ display: "flex", alignSelf: "center" }}>
          Tax Invoice ???????????? ????????????
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 5,
          alignItems: "center",
          fontSize: 12,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text>Invoice No :</Text>
          <Text>Invoice Date :</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text>
            DNV/{new Date().getFullYear()}/{vehicle.id}
          </Text>
          <Text>{date}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text>?????? ????????????????</Text>
          <Text>?????????? ????????????????</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Image
            id="qr"
            ref={imgRef}
            src={imgRef.current}
            alt=""
            style={{ height: 80, width: 80, alignSelf: "flex-end" }}
          />
        </View>
      </View>
    </View>
  );
};

const CustomerInfo = ({ vehicle }) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: "#E4E7EB",
          marginTop: 10,
        }}
      >
        <Text style={{ display: "flex", alignSelf: "center" }}>
          Customer Info ???????????? ????????????
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 10,
          fontSize: 12,
          alignItems: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            fontWeight: "bold",
            fontFamily: "Open Sans",
            lineHeight: 1.5,
          }}
        >
          <Text>Name:</Text>
          <Text>Address:</Text>
          <Text>Email:</Text>
          <Text>Phone:</Text>
          <Text>WebSite:</Text>
          <Text>Tax Id :</Text>
        </View>
        <View
          style={{
            flex: 1,
            display: "flex",
            alignSelf: "center",
            lineHeight: 1.5,
          }}
        >
          <Text style={{ display: "flex", alignSelf: "center" }}>
            {vehicle?.customer?.name}
          </Text>
          <Text style={{ display: "flex", alignSelf: "center" }}>
            {vehicle?.customer?.address}
          </Text>
          <Text style={{ display: "flex", alignSelf: "center" }}>
            {vehicle?.customer?.email}
          </Text>
          <Text style={{ display: "flex", alignSelf: "center" }}>
            {vehicle?.customer?.phone}
          </Text>
          <Text style={{ display: "flex", alignSelf: "center" }}>
            {vehicle?.customer?.website}
          </Text>
          <Text style={{ display: "flex", alignSelf: "center" }}>
            {vehicle?.customer?.taxId}
          </Text>
        </View>
        <View style={{ flex: 1, fontWeight: "bold", lineHeight: 1.5 }}>
          <Text style={{ display: "flex", alignSelf: "flex-end" }}>?????????? </Text>
          <Text style={{ display: "flex", alignSelf: "flex-end" }}>
            ??????????????
          </Text>
          <Text style={{ display: "flex", alignSelf: "flex-end" }}>
            ???????????? ????????????????????
          </Text>
          <Text style={{ display: "flex", alignSelf: "flex-end" }}>????????</Text>
          <Text style={{ display: "flex", alignSelf: "flex-end" }}>
            ???????? ????????????????
          </Text>
          <Text style={{ display: "flex", alignSelf: "flex-end" }}>
            ?????????? ??????????????
          </Text>
        </View>
      </View>
    </View>
  );
};
const InvoiceItems = ({ vehicle }) => {
  const reportNo = addLeadingZeros(vehicle.id, 5);
  const styles = StyleSheet.create({
    cell: {
      height: 30,
      border: "1px solid gray",
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  });
  return (
    <View>
      <View
        style={{
          backgroundColor: "#E4E7EB",
          marginTop: 10,
        }}
      >
        <Text style={{ display: "flex", alignSelf: "center" }}>
          Items ??????????????
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          backgroundColor: "#E4E7EB",
          flexDirection: "row",
          marginTop: 5,
          alignItems: "center",
          justifyContent: "center",
          fontSize: 12,
        }}
      >
        <View
          style={{
            flex: 1.5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Name</Text>
          <Text>??????????</Text>
        </View>
        <View
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Req No</Text>
          <Text> ??????</Text>
        </View>
        <View
          style={{
            flex: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>VIN</Text>
          <Text>?????? ????????????</Text>
        </View>
        <View
          style={{
            flex: 1.5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Report</Text>
          <Text>?????? ??????????????</Text>
        </View>
        <View
          style={{
            flex: 1.5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Port</Text>
          <Text>????????????</Text>
        </View>
        <View
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Price</Text>
          <Text>??????????</Text>
        </View>
        <View
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Qty</Text>
          <Text>????????????</Text>
        </View>
        <View
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Vat</Text>
          <Text>??????????????</Text>
        </View>
        <View
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Total</Text>
          <Text>????????????????</Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 12,
        }}
      >
        <View style={[styles.cell, { flex: 1.5 }]}>
          <Text>?????? ??????????</Text>
        </View>
        <View style={styles.cell}>
          <Text>{vehicle.reqNo}</Text>
        </View>
        <View style={[styles.cell, { flex: 4 }]}>
          <Text>{vehicle.vin}</Text>
        </View>
        <View style={[styles.cell, { flex: 1.5 }]}>
          <Text>TD{reportNo}</Text>
        </View>
        <View style={[styles.cell, { flex: 1.5 }]}>
          <Text>{vehicle.port}</Text>
        </View>
        <View style={styles.cell}>
          <Text>{vehicle.price}</Text>
        </View>
        <View style={styles.cell}>
          <Text>1</Text>
        </View>
        <View style={styles.cell}>
          <Text>{vehicle.tax}</Text>
        </View>
        <View style={styles.cell}>
          <Text>345</Text>
        </View>
      </View>
    </View>
  );
};

const InvoiceTotal = ({ vehicle }) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: "#E4E7EB",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text>Total</Text>

        <Text>????????????????</Text>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 12,
          borderBottom: "1px solid gray",
          paddingVertical: 5,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              display: "flex",
              alignSelf: "flex-start",
            }}
          >
            Total(Excluding VAT)
          </Text>
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              display: "flex",
              alignSelf: "center",
            }}
          >
            300 SAR
          </Text>
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              display: "flex",
              alignSelf: "flex-end",
            }}
          >
            ???????????????? ?????? ???????? ?????????? ???????????? ??????????????
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 12,
          borderBottom: "1px solid gray",
          paddingVertical: 5,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              display: "flex",
              alignSelf: "flex-start",
            }}
          >
            VAT
          </Text>
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              display: "flex",
              alignSelf: "center",
            }}
          >
            45 SAR
          </Text>
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              display: "flex",
              alignSelf: "flex-end",
            }}
          >
            ?????????? ???????????? ??????????????
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 12,
          borderBottom: "1px solid gray",
          paddingVertical: 5,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              display: "flex",
              alignSelf: "flex-start",
            }}
          >
            Total
          </Text>
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              display: "flex",
              alignSelf: "center",
            }}
          >
            345 SAR
          </Text>
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              display: "flex",
              alignSelf: "flex-end",
            }}
          >
            ???????????????? ???????? ?????????? ???????????? ??????????????
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 12,
          fontWeight: "bold",
          borderBottom: "1px solid gray",
          paddingVertical: 5,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              display: "flex",
              alignSelf: "flex-start",
              fontWeight: "medium",
              fontFamily: "Open Sans",
            }}
          >
            Three hundred fourty five riyals{" "}
          </Text>
        </View>

        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              display: "flex",
              alignSelf: "flex-end",
            }}
          >
            ?????? ???????? ???????????????? ?????????? ?????????????? ????????
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 10,
          display: "flex",
          backgroundColor: "#E4E7EB",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 12,
          fontWeight: "bold",
          paddingVertical: 5,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              display: "flex",
              alignSelf: "flex-start",
              fontWeight: "medium",
              fontFamily: "Open Sans",
            }}
          >
            Vat registration number :
          </Text>
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              display: "flex",
              alignSelf: "center",
            }}
          >
            31226063500003
          </Text>
        </View>

        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              display: "flex",
              alignSelf: "flex-end",
            }}
          >
            : ?????? ?????????????? ??????????????
          </Text>
        </View>
      </View>
    </View>
  );
};

const InvoiceFooter = () => {
  return (
    <View
      style={{
        marginTop: 20,
        paddingTop: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: 10,
        borderTop: "2px solid gray",
      }}
    >
      <View>
        <Text>TAHAQOQ CO./ TAHAQOQ VEHICLES</Text>
        <Text>INSPECTION CENTER /DAMMAM BRANSH</Text>
        <Text>Address:Dammam,Khalidyah,KSA</Text>
        <Text>Mob:+96657765665</Text>
        <Text>Email:info@tahaqoq.com</Text>
      </View>
      <View>
        <Text style={{ display: "flex", alignSelf: "flex-end" }}>
          ???????? ???????????? ??????????????
        </Text>
        <Text style={{ display: "flex", alignSelf: "flex-end" }}>
          ???????? ?????? ???????????????? -????????????
        </Text>
        <Text style={{ display: "flex", alignSelf: "flex-end" }}>
          ?????????????? :???????????? -????????????????
        </Text>
        <Text style={{ display: "flex", alignSelf: "flex-end" }}>
          Mob:+96657765665
        </Text>
        <Text style={{ display: "flex", alignSelf: "flex-end" }}>
          Email:info@tahaqoq.com
        </Text>
      </View>
    </View>
  );
};
