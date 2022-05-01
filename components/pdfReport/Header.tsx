import { Text, View, Image } from "@react-pdf/renderer";
import { addLeadingZeros } from "../../utils";
import { styles } from "./styles";
const Header = ({ vehicle }) => {
  const reportNo = addLeadingZeros(vehicle.id, 5);
  const date = new Date(vehicle.createdAt).toLocaleDateString("en-GB");

  return (
    <View style={styles.header}>
      <View style={{ flex: 1 }}>
        <Image style={styles.logo} src={"/images/logo.png"} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={[styles.headerText, styles.englishText]}>
          INSPECTION REPORT
        </Text>
        <Text style={styles.headerText}>تقرير الفحص</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              display: "flex",
              alignSelf: "center",
              fontWeight: "medium",
              fontSize: 14,
            }}
          >
            رقم التقرير
          </Text>
          <Text
            style={{
              fontFamily: "Open Sans",
              fontWeight: "medium",
              display: "flex",
              alignSelf: "center",
              fontSize: 12,
            }}
          >
            TD{reportNo} :
          </Text>
        </View>
        <View style={[styles.row, { flexDirection: "row-reverse" }]}>
          <Text>: تاريخ</Text>
          <Text
            style={{
              fontWeight: "medium",
              fontSize: 12,
            }}
          >
            {date}
          </Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Text
          style={[
            styles.text,
            { display: "flex", alignSelf: "flex-end", fontSize: 14 },
          ]}
        >
          شركة التحقق الدولية لفحص السيارات
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
};
export default Header;
