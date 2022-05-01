import { Text, View, Image } from "@react-pdf/renderer";
import { styles } from "./styles";
const Footer = () => {
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
      <View style={{ flex: 1 }}>
        <Text>TAHAQOQ CO./ TAHAQOQ VEHICLES</Text>
        <Text>INSPECTION CENTER /DAMMAM BRANSH</Text>
        <Text>Address:Dammam,Khalidyah,KSA</Text>
        <Text>Mob:+96657765665</Text>
        <Text>Email:info@tahaqoq.com</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Image
          style={[styles.logo, { alignSelf: "center" }]}
          src={"/images/logo.png"}
        />

        <Text
          style={{ alignSelf: "center", marginTop: 10 }}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ display: "flex", alignSelf: "flex-end" }}>
          شركة التحقق الدولية
        </Text>
        <Text style={{ display: "flex", alignSelf: "flex-end" }}>
          مركز فحص السيارات -الدمان
        </Text>
        <Text style={{ display: "flex", alignSelf: "flex-end" }}>
          العنوان :الدمام -الخالدية
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
export default Footer;
