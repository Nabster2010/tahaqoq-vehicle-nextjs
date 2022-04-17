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
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getVehicleById } from "../../../app/reducer/vehicleSlice";
import NotFound from "../../../components/NotFound";
import Spinner from "../../../components/Spinner";
import qr from "../../../public/images/qr.png";
import { addLeadingZeros } from "../../../utils";

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
});

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
  return (
    <PDFViewer style={styles.viewer}>
      <Document language="arabic">
        <Page size="A4" style={styles.page}>
          <View fixed>
            <Header />
          </View>
          <InfoSection />
          <ResultSection />
          <View break />
          <PageTwo />
          <View break />
          <PageThree />
          <View fixed>
            <Footer />
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default Report;

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={{ flex: 1 }}>
        <Image style={styles.logo} src={"/images/logo.png"} />
      </View>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontFamily: "Open Sans",
            fontWeight: "medium",
            display: "flex",
            alignSelf: "center",
            fontSize: 14,
          }}
        >
          INSPECTION REPORT
        </Text>
        <Text
          style={{
            display: "flex",
            alignSelf: "center",
            fontWeight: "medium",
            fontSize: 14,
          }}
        >
          تقرير الفحص
        </Text>
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
            TD0000 :
          </Text>
        </View>
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
            : تاريخ
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
            DD/MM/YYYY
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

const InfoSection = () => {
  return (
    <View
      style={{
        marginTop: 20,
        fontSize: 12,
        fontWeight: "medium",
      }}
    >
      <View style={{ display: "flex", flexDirection: "row-reverse" }}>
        <View
          style={{
            paddingRight: 10,
            border: "1px solid gray",
            alignItems: "flex-end",
            justifyContent: "center",
            height: 30,
            flex: 1,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>رقم الهيكل</Text>
        </View>
        <View
          style={{
            paddingRight: 10,
            border: "1px solid gray",
            borderRight: 0,
            alignItems: "flex-end",
            justifyContent: "center",
            flex: 3,
          }}
        >
          <Text style={{ fontFamily: "Open Sans" }}>2hh32783728djsgdjgs</Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            marginRight: 10,
            width: "40%",
          }}
        >
          <View
            style={{
              height: 30,
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            <View
              style={{
                paddingRight: 10,
                border: "1px solid gray",
                alignItems: "flex-end",
                justifyContent: "center",
                height: 30,
                flex: 1,
              }}
            >
              <Text style={{ fontWeight: "bold" }}> عدد الركاب</Text>
            </View>
            <View
              style={{
                paddingRight: 10,
                border: "1px solid gray",
                borderRight: 0,
                alignItems: "flex-end",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <Text style={{ fontFamily: "Open Sans", fontWeight: "normal" }}>
                5
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 30,
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            <View
              style={{
                paddingRight: 10,
                border: "1px solid gray",
                borderTop: 0,
                alignItems: "flex-end",
                justifyContent: "center",
                height: 30,
                flex: 1,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>قراءة العداد</Text>
            </View>
            <View
              style={{
                paddingRight: 10,
                border: "1px solid gray",
                borderTop: 0,
                borderRight: 0,
                alignItems: "flex-end",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <Text style={{ fontFamily: "Open Sans", fontWeight: "normal" }}>
                132442
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 30,
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            <View
              style={{
                paddingRight: 10,
                border: "1px solid gray",
                borderTop: 0,
                alignItems: "flex-end",
                justifyContent: "center",
                height: 30,
                flex: 1,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>نوع المركبة</Text>
            </View>
            <View
              style={{
                paddingRight: 10,
                border: "1px solid gray",
                borderTop: 0,
                borderRight: 0,
                alignItems: "flex-end",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <Text style={{ fontFamily: "Open Sans", fontWeight: "normal" }}>
                CAMRY
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 30,
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            <View
              style={{
                paddingRight: 10,
                border: "1px solid gray",
                borderTop: 0,
                alignItems: "flex-end",
                justifyContent: "center",
                height: 30,
                flex: 1,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>الطراز</Text>
            </View>
            <View
              style={{
                paddingRight: 10,
                border: "1px solid gray",
                borderTop: 0,
                borderRight: 0,
                alignItems: "flex-end",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <Text style={{ fontFamily: "Open Sans", fontWeight: "normal" }}>
                TOYOTA
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 30,
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            <View
              style={{
                paddingRight: 10,
                border: "1px solid gray",
                borderTop: 0,
                alignItems: "flex-end",
                justifyContent: "center",
                height: 30,
                flex: 1,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>الموديل</Text>
            </View>
            <View
              style={{
                paddingRight: 10,
                border: "1px solid gray",
                borderTop: 0,
                borderRight: 0,
                alignItems: "flex-end",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <Text style={{ fontFamily: "Open Sans", fontWeight: "normal" }}>
                2019
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 30,
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            <View
              style={{
                paddingRight: 10,
                border: "1px solid gray",
                borderTop: 0,
                alignItems: "flex-end",
                justifyContent: "center",
                height: 30,
                flex: 1,
              }}
            >
              <Text style={{ fontWeight: "bold" }}> اللون</Text>
            </View>
            <View
              style={{
                paddingRight: 10,
                border: "1px solid gray",
                borderTop: 0,
                borderRight: 0,
                alignItems: "flex-end",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <Text>ابيض</Text>
            </View>
          </View>
          <View
            style={{
              height: 30,
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            <View
              style={{
                paddingRight: 10,
                border: "1px solid gray",
                borderTop: 0,
                alignItems: "flex-end",
                justifyContent: "center",
                height: 30,
                flex: 1,
              }}
            >
              <Text style={{ fontWeight: "bold" }}> البلد المستورد منه</Text>
            </View>
            <View
              style={{
                paddingRight: 10,
                border: "1px solid gray",
                borderTop: 0,
                borderRight: 0,
                alignItems: "flex-end",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <Text style={{}}>اليابان</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: "60%",
          }}
        >
          <View
            style={{
              height: 30,
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            <View
              style={{
                paddingRight: 10,
                border: "1px solid gray",
                alignItems: "flex-end",
                justifyContent: "center",
                height: 30,
                flex: 1.5,
              }}
            >
              <Text style={{ fontWeight: "bold" }}> مكان الفحص</Text>
            </View>
            <View
              style={{
                paddingRight: 10,
                border: "1px solid gray",
                borderRight: 0,
                alignItems: "flex-end",
                justifyContent: "center",
                flex: 3,
              }}
            >
              <Text style={{ fontWeight: "normal" }}>
                شركة التحقق الدولية لفحص السيارات بالدمام
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 30,
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            <View
              style={{
                paddingRight: 10,
                border: "1px solid gray",
                borderTop: 0,
                alignItems: "flex-end",
                justifyContent: "center",
                height: 30,
                flex: 1.5,
              }}
            >
              <Text style={{ fontWeight: "bold" }}> الجهة الطالبة للفحص</Text>
            </View>
            <View
              style={{
                paddingRight: 10,
                border: "1px solid gray",
                borderTop: 0,
                borderRight: 0,
                alignItems: "flex-end",
                justifyContent: "center",
                flex: 3,
              }}
            >
              <Text style={{ fontWeight: "normal" }}>سلوي</Text>
            </View>
          </View>
          <View
            style={{
              height: 30,
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            <View
              style={{
                paddingRight: 10,
                border: "1px solid gray",
                borderTop: 0,
                alignItems: "flex-end",
                justifyContent: "center",
                height: 30,
                flex: 1.5,
              }}
            >
              <Text style={{ fontWeight: "bold" }}> رقم بيان الاستيراد</Text>
            </View>
            <View
              style={{
                paddingRight: 10,
                border: "1px solid gray",
                borderTop: 0,
                borderRight: 0,
                alignItems: "flex-end",
                justifyContent: "center",
                flex: 3,
              }}
            >
              <Text style={{ fontFamily: "Open Sans", fontWeight: "normal" }}>
                6567
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 30,
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            <View
              style={{
                paddingRight: 10,
                border: "1px solid gray",
                borderTop: 0,
                alignItems: "flex-end",
                justifyContent: "center",
                height: 30,
                flex: 1.5,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>تاريخ بيان الاستيراد</Text>
            </View>
            <View
              style={{
                paddingRight: 10,
                border: "1px solid gray",
                borderTop: 0,
                borderRight: 0,
                alignItems: "flex-end",
                justifyContent: "center",
                flex: 3,
              }}
            >
              <Text style={{ fontFamily: "Open Sans", fontWeight: "normal" }}>
                22/03/2022
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 30,
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            <View
              style={{
                paddingRight: 10,
                border: "1px solid gray",
                borderTop: 0,
                alignItems: "flex-end",
                justifyContent: "center",
                height: 30,
                flex: 1.5,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>تاريخ استلام المركبة</Text>
            </View>
            <View
              style={{
                paddingRight: 10,
                border: "1px solid gray",
                borderTop: 0,
                borderRight: 0,
                alignItems: "flex-end",
                justifyContent: "center",
                flex: 3,
              }}
            >
              <Text style={{ fontFamily: "Open Sans", fontWeight: "normal" }}>
                22/03/2022
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 30,
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            <View
              style={{
                paddingRight: 10,
                border: "1px solid gray",
                borderTop: 0,
                alignItems: "flex-end",
                justifyContent: "center",
                height: 30,
                flex: 1.5,
              }}
            >
              <Text style={{ fontWeight: "bold" }}> رقم الاحالة</Text>
            </View>
            <View
              style={{
                paddingRight: 10,
                border: "1px solid gray",
                borderTop: 0,
                borderRight: 0,
                alignItems: "flex-end",
                justifyContent: "center",
                flex: 3,
              }}
            >
              <Text style={{ fontFamily: "Open Sans", fontWeight: "normal" }}>
                56655
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 30,
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            <View
              style={{
                paddingRight: 10,
                border: "1px solid gray",
                borderTop: 0,
                alignItems: "flex-end",
                justifyContent: "center",
                height: 30,
                flex: 1.5,
              }}
            >
              <Text style={{ fontWeight: "bold" }}> اسم المستورد</Text>
            </View>
            <View
              style={{
                paddingRight: 10,
                border: "1px solid gray",
                borderTop: 0,
                borderRight: 0,
                alignItems: "flex-end",
                justifyContent: "center",
                flex: 3,
              }}
            >
              <Text style={{}}>محمد بن علي بن احمد العلي</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const ResultSection = () => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 60,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "center",
          alignItems: "center",
          width: "40%",
        }}
      >
        <View style={{ height: 30, border: "1px solid gray", flex: 1 }}>
          <Text
            style={{
              display: "flex",
              alignSelf: "center",
              fontWeight: "medium",
            }}
          >
            :نتيجة الفحص
          </Text>
        </View>
        <View
          style={{
            height: 30,
            border: "1px solid gray",
            flex: 1,
            borderRight: 0,
          }}
        >
          <Text
            style={{
              display: "flex",
              alignSelf: "center",
              fontWeight: "medium",
            }}
          >
            مطابق
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 40,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        <View
          style={{
            height: 30,
            border: "1px solid gray",
            width: "50%",
          }}
        >
          <Text
            style={{
              display: "flex",
              alignSelf: "center",
              fontWeight: "medium",
            }}
          >
            المدير الفني : عبدالحكيم البريه{" "}
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 10,
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: 100,
        }}
      >
        <View
          style={{
            flex: 1,
            marginRight: 20,
            backgroundColor: "#f5f5f5",
          }}
        ></View>
        <View
          style={{
            flex: 1,
            backgroundColor: "#f5f5f5",
          }}
        ></View>
      </View>
    </View>
  );
};

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
        <Text style={{ alignSelf: "center", marginTop: 10 }}> صفحة ١ من ٣</Text>
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

const PageTwo = () => {
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontWeight: "bold", fontSize: 18, alignSelf: "center" }}>
        تقرير الفحص الخارجي والفحص السفلي
      </Text>
      <View
        style={{
          marginTop: 20,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "50%",
            marginRight: 20,
          }}
        >
          <View
            style={{
              width: "100%",
              fontSize: 8,
            }}
          >
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  height: 17,
                }}
              >
                <Text style={{ paddingRight: 2 }}> متطلبات القبول والرفض</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}> شهادة مطابقة خليجية</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>A</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>
                  السيارة ليست من سيارات الاجرة
                </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>B</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>
                  السيارةلم تختم بعبارة سالفج او غرق
                </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>C</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>
                  السيارة ليست من سيارات البوليس
                </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>D</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ paddingRight: 2, fontWeight: "medium" }}>
                  الفحص الخارجي
                </Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>لون المركبة</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>1</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>الرقم المميز للمركبة</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>2</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>
                  {" "}
                  اللوحات المعدنية للمركبة{" "}
                </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>3</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>نقاط التثبيت للمركبة</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>4</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>
                  الاسطوانات الرئيسية للفرامل وخزان سائل الفرامل
                </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>5</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>
                  حالة الضفيرة والنظام الكهربائي والبطارية{" "}
                </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>6</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>الانوار الامامية </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>7</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>الانوار الامامية </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>7</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>الانوار الامامية </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>7</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>الانوار الامامية </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>7</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>الانوار الامامية </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>7</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>الانوار الامامية </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>7</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>الانوار الامامية </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>7</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>الانوار الامامية </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>7</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>الانوار الامامية </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>7</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>الانوار الامامية </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>7</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>الانوار الامامية </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>7</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>الانوار الامامية </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>7</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>الانوار الامامية </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>7</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>الانوار الامامية </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>7</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>الانوار الامامية </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>7</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>الانوار الامامية </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>7</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>الانوار الامامية </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>7</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>الانوار الامامية </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>7</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            width: "50%",
          }}
        >
          <View
            style={{
              width: "100%",
              fontSize: 8,
            }}
          >
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  height: 17,
                }}
              >
                <Text style={{ paddingRight: 2 }}> متطلبات القبول والرفض</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}> شهادة مطابقة خليجية</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>A</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>
                  السيارة ليست من سيارات الاجرة
                </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>B</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>
                  السيارةلم تختم بعبارة سالفج او غرق
                </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>C</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>
                  السيارة ليست من سيارات البوليس
                </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>D</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ paddingRight: 2, fontWeight: "medium" }}>
                  الفحص الخارجي
                </Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>لون المركبة</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>1</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>الرقم المميز للمركبة</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>2</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>
                  {" "}
                  اللوحات المعدنية للمركبة{" "}
                </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>3</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>نقاط التثبيت للمركبة</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>4</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>
                  الاسطوانات الرئيسية للفرامل وخزان سائل الفرامل
                </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>5</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>
                  حالة الضفيرة والنظام الكهربائي والبطارية{" "}
                </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>6</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>الانوار الامامية </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>7</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>الانوار الامامية </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>7</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>الانوار الامامية </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>7</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>الانوار الامامية </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>7</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>الانوار الامامية </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>7</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>الانوار الامامية </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>7</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>الانوار الامامية </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>7</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>الانوار الامامية </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>7</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>الانوار الامامية </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>7</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>الانوار الامامية </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>7</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>الانوار الامامية </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>7</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>الانوار الامامية </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>7</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>الانوار الامامية </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>7</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>الانوار الامامية </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>7</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>الانوار الامامية </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>7</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>الانوار الامامية </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>7</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>الانوار الامامية </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>7</Text>
              </View>
            </View>
            <View style={{ height: 15, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pass</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>الانوار الامامية </Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",
                  borderTop: 0,
                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>7</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          border: "1px solid gray",
          marginTop: 20,
          height: 80,
          display: "flex",
        }}
      >
        <Text style={{}}>ملاحظات</Text>
      </View>
    </View>
  );
};

// TODO: Extract styles
// TODO: page3

const PageThree = () => {
  return <Text>Page three</Text>;
};
