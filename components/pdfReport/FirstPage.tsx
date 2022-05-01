import { Text, View } from "@react-pdf/renderer";
import { getFinalResult } from "../../utils";

const FirstPage = ({ vehicle }) => {
  return (
    <>
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
            <Text style={{ fontFamily: "Open Sans" }}>{vehicle?.vin}</Text>
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
                  {vehicle?.vehicleInfo?.seats}
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
                  {vehicle?.vehicleInfo?.mileage}
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
                  {vehicle?.vehicleInfo?.vehicleType?.name}
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
                  {vehicle?.vehicleInfo?.vehicleType?.manufacturer?.name}
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
                  {vehicle?.vehicleInfo?.year}
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
                <Text>{vehicle?.vehicleInfo?.color?.tName}</Text>
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
                <Text style={{}}>
                  {vehicle?.vehicleInfo?.vehicleType?.manufacturer?.country}
                </Text>
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
                <Text style={{ fontWeight: "normal" }}>{vehicle?.port}</Text>
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
                  {vehicle?.bayanNo}
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
                  {vehicle?.bayanDate}
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
                  {vehicle?.createdAt?.split("T")[0]}
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
                  {vehicle?.reqNo}
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
                <Text style={{}}>{vehicle?.customer?.name}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
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
              {getFinalResult(vehicle) ? "مطابق" : "غير مطابق"}
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
    </>
  );
};

export default FirstPage;
