import { Text, View } from "@react-pdf/renderer";
import { testLimits } from "../../data";
const PageThree = ({ vehicle }) => {
  return (
    <View>
      <Text style={{ fontWeight: "bold", fontSize: 18, alignSelf: "center" }}>
        تقرير الفحوصات الفنية
      </Text>
      {/* thead */}
      <View
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          height: 40,
          fontSize: 12,
          fontWeight: "bold",
        }}
      >
        <View
          style={{
            flex: 1,
            border: "1px solid gray",
            borderLeft: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>م.</Text>
        </View>
        <View
          style={{
            flex: 2,
            border: "1px solid gray",
            borderLeft: 0,

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>المواصفة</Text>
        </View>
        <View
          style={{
            flex: 2,
            border: "1px solid gray",
            borderLeft: 0,

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>البند</Text>
        </View>
        <View
          style={{
            flex: 3,
            border: "1px solid gray",
            borderLeft: 0,

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>اسم الفحص</Text>
        </View>
        <View
          style={{
            flex: 9,
            border: "1px solid gray",
            borderLeft: 0,

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>النتائج</Text>
        </View>
        <View
          style={{
            flex: 3,
            border: "1px solid gray",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text wrap> المطابقة </Text>
        </View>
      </View>
      {/* tbody */}

      {vehicle?.vehicleInfo?.fuelType === "PETROL" && (
        <>
          <View
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              height: 40,
              fontSize: 10,
              fontWeight: "medium",
            }}
          >
            <View
              style={{
                flex: 1,
                border: "1px solid gray",
                borderBottom: "1px solid white",
                borderLeft: 0,
                borderTop: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>1</Text>
            </View>
            <View
              style={{
                flex: 2,
                border: "1px solid gray",
                borderBottom: "1px solid white",
                borderLeft: 0,
                borderTop: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>م ق س ٤٨٢١</Text>
            </View>
            <View
              style={{
                flex: 2,
                border: "1px solid gray",
                borderBottom: "1px solid white",
                borderLeft: 0,
                borderTop: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>1/4/6</Text>
            </View>
            <View
              style={{
                flex: 3,
                border: "1px solid gray",
                borderBottom: "1px solid white",
                borderLeft: 0,
                borderTop: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>فحص غازات العادم</Text>
            </View>
            {/*  */}
            <View style={{ flex: 9, flexDirection: "row" }}>
              <View
                style={{
                  flex: 1,
                  borderRight: "1px solid gray",
                  borderBottom: "1px solid gray",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 40,
                }}
              >
                <Text>هيدروكربونات </Text>
                <Text>جزء من المليون</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  borderRight: "1px solid gray",
                  borderBottom: "1px solid gray",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 40,
                }}
              >
                <Text>اول اكسيد </Text>
                <Text> الكربون</Text>
              </View>
            </View>
            {/*  */}
            <View
              style={{
                flex: 3,
                border: "1px solid gray",
                borderBottom: "1px solid white",
                borderTop: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text> {vehicle?.emissionTest?.result ? "PASS" : "FAIL"} </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              height: 40,
              fontSize: 10,
              fontWeight: "medium",
            }}
          >
            <View
              style={{
                flex: 1,
                border: "1px solid gray",
                borderLeft: 0,
                borderTop: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            ></View>
            <View
              style={{
                flex: 2,
                border: "1px solid gray",
                borderLeft: 0,
                borderTop: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            ></View>
            <View
              style={{
                flex: 2,
                border: "1px solid gray",
                borderLeft: 0,
                borderTop: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            ></View>
            <View
              style={{
                flex: 3,
                border: "1px solid gray",
                borderLeft: 0,
                borderTop: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            ></View>
            <View style={{ flex: 9, flexDirection: "row" }}>
              <View
                style={{
                  flex: 1,
                  borderRight: "1px solid gray",
                  borderBottom: "1px solid gray",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 40,
                }}
              >
                <Text>{vehicle?.emissionTest?.hc} ppm</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  borderRight: "1px solid gray",
                  borderBottom: "1px solid gray",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 40,
                }}
              >
                <Text>{vehicle?.emissionTest?.co}</Text>
              </View>
            </View>
            <View
              style={{
                flex: 3,
                border: "1px solid gray",
                borderTop: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            ></View>
          </View>
        </>
      )}
      {vehicle?.vehicleInfo?.fuelType === "DIESEL" && (
        <>
          <View
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              height: 40,
              fontSize: 10,
              fontWeight: "medium",
            }}
          >
            <View
              style={{
                flex: 1,
                border: "1px solid gray",
                borderBottom: "1px solid white",
                borderLeft: 0,
                borderTop: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>1</Text>
            </View>
            <View
              style={{
                flex: 2,
                border: "1px solid gray",
                borderBottom: "1px solid white",
                borderLeft: 0,
                borderTop: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>م ق س ٤٨٢١</Text>
            </View>
            <View
              style={{
                flex: 2,
                border: "1px solid gray",
                borderBottom: "1px solid white",
                borderLeft: 0,
                borderTop: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>1/4/6</Text>
            </View>
            <View
              style={{
                flex: 3,
                border: "1px solid gray",
                borderBottom: "1px solid white",
                borderLeft: 0,
                borderTop: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>فحص غازات العادم</Text>
            </View>
            {/*  */}
            <View style={{ flex: 9, flexDirection: "row" }}>
              <View
                style={{
                  flex: 1,
                  borderRight: "1px solid gray",
                  borderBottom: "1px solid gray",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 40,
                }}
              >
                <Text>وقود الديزيل </Text>
              </View>
            </View>
            {/*  */}
            <View
              style={{
                flex: 3,
                border: "1px solid gray",
                borderBottom: "1px solid white",
                borderTop: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text> {vehicle?.emissionTest?.result ? "PASS" : "FAIL"} </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              height: 40,
              fontSize: 10,
              fontWeight: "medium",
            }}
          >
            <View
              style={{
                flex: 1,
                border: "1px solid gray",
                borderLeft: 0,
                borderTop: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            ></View>
            <View
              style={{
                flex: 2,
                border: "1px solid gray",
                borderLeft: 0,
                borderTop: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            ></View>
            <View
              style={{
                flex: 2,
                border: "1px solid gray",
                borderLeft: 0,
                borderTop: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            ></View>
            <View
              style={{
                flex: 3,
                border: "1px solid gray",
                borderLeft: 0,
                borderTop: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            ></View>
            <View style={{ flex: 9, flexDirection: "row" }}>
              <View
                style={{
                  flex: 1,
                  borderRight: "1px solid gray",
                  borderBottom: "1px solid gray",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 40,
                }}
              >
                <Text>{vehicle?.emissionTest?.diesel} %</Text>
              </View>
            </View>
            <View
              style={{
                flex: 3,
                border: "1px solid gray",
                borderTop: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            ></View>
          </View>
        </>
      )}

      <View
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          height: 40,
          fontSize: 10,
          fontWeight: "medium",
        }}
      >
        <View
          style={{
            flex: 1,
            border: "1px solid gray",
            borderLeft: 0,
            borderTop: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>2</Text>
        </View>
        <View
          style={{
            flex: 2,
            border: "1px solid gray",
            borderLeft: 0,
            borderTop: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>م ق س ٤٨٢١</Text>
        </View>
        <View
          style={{
            flex: 2,
            border: "1px solid gray",
            borderLeft: 0,
            borderTop: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>5/6</Text>
        </View>
        <View
          style={{
            flex: 3,
            border: "1px solid gray",
            borderLeft: 0,
            borderTop: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>فحص شدةواستقامة </Text>
          <Text> شعاع الانوار </Text>
        </View>
        <View
          style={{
            flex: 9,
            flexDirection: "row",
            border: "1px solid gray",
            borderLeft: 0,
            borderTop: 0,
            justifyContent: "center",
            alignItems: "center",
            height: 40,
          }}
        >
          <Text>{vehicle?.highBeamLevel?.left} cd</Text>
        </View>
        <View
          style={{
            flex: 3,
            border: "1px solid gray",
            borderTop: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text> {vehicle?.highBeamLevel?.result ? "PASS" : "FAIL"} </Text>
        </View>
      </View>
      {/* tr */}
      <View
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          height: 40,
          fontSize: 10,
          fontWeight: "medium",
        }}
      >
        <View
          style={{
            flex: 1,
            border: "1px solid gray",
            borderLeft: 0,
            borderTop: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>3</Text>
        </View>
        <View
          style={{
            flex: 2,
            border: "1px solid gray",
            borderLeft: 0,
            borderTop: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>م ق س ٤٨٢١</Text>
        </View>
        <View
          style={{
            flex: 2,
            border: "1px solid gray",
            borderLeft: 0,
            borderTop: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>2/6</Text>
        </View>
        <View
          style={{
            flex: 3,
            border: "1px solid gray",
            borderLeft: 0,
            borderTop: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>فحص انحراف انزلاق </Text>
          <Text>العجلات م/كم</Text>
        </View>
        <View
          style={{
            flex: 9,
            flexDirection: "row",
            border: "1px solid gray",
            borderLeft: 0,
            borderTop: 0,
            justifyContent: "center",
            alignItems: "center",
            height: 40,
          }}
        >
          <Text>{vehicle?.sideSlip?.reading}</Text>
        </View>
        <View
          style={{
            flex: 3,
            border: "1px solid gray",
            borderTop: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text> {vehicle?.sideSlip?.result ? "PASS" : "FAIL"} </Text>
        </View>
      </View>
      {/* tr */}
      <View
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          height: 40,
          fontSize: 10,
          fontWeight: "medium",
        }}
      >
        <View
          style={{
            flex: 1,
            border: "1px solid gray",
            borderBottom: "1px solid white",
            borderLeft: 0,
            borderTop: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>4</Text>
        </View>
        <View
          style={{
            flex: 2,
            border: "1px solid gray",
            borderBottom: "1px solid white",
            borderLeft: 0,
            borderTop: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>م ق س ٤٨٢١</Text>
        </View>
        <View
          style={{
            flex: 2,
            border: "1px solid gray",
            borderBottom: "1px solid white",
            borderLeft: 0,
            borderTop: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>7/6</Text>
        </View>
        <View
          style={{
            flex: 3,
            border: "1px solid gray",
            borderBottom: "1px solid white",
            borderLeft: 0,
            borderTop: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>فحص نظام التعليق </Text>
        </View>
        {/*  */}
        <View style={{ flex: 9, flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              borderRight: "1px solid gray",
              borderBottom: "1px solid gray",
              justifyContent: "center",
              alignItems: "center",
              height: 40,
            }}
          >
            <Text>محور خلفي </Text>
            <Text>يسار</Text>
          </View>
          <View
            style={{
              flex: 1,
              borderRight: "1px solid gray",
              borderBottom: "1px solid gray",
              justifyContent: "center",
              alignItems: "center",
              height: 40,
            }}
          >
            <Text>محور خلفي</Text>
            <Text>يمين</Text>
          </View>
          <View
            style={{
              flex: 1,
              borderRight: "1px solid gray",
              borderBottom: "1px solid gray",
              justifyContent: "center",
              alignItems: "center",
              height: 40,
            }}
          >
            <Text>محور امامي</Text>
            <Text> يسار</Text>
          </View>
          <View
            style={{
              flex: 1,
              borderRight: "1px solid gray",
              borderBottom: "1px solid gray",
              justifyContent: "center",
              alignItems: "center",
              height: 40,
            }}
          >
            <Text>محور امامي</Text>
            <Text> يمين</Text>
          </View>
        </View>
        {/*  */}
        <View
          style={{
            flex: 3,
            border: "1px solid gray",
            borderBottom: "1px solid white",
            borderTop: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text> {vehicle?.suspensionTest?.result ? "PASS" : "FAIL"} </Text>
        </View>
      </View>
      {/* tr */}
      <View
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          height: 40,
          fontSize: 10,
          fontWeight: "medium",
        }}
      >
        <View
          style={{
            flex: 1,
            border: "1px solid gray",
            borderLeft: 0,
            borderTop: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        ></View>
        <View
          style={{
            flex: 2,
            border: "1px solid gray",
            borderLeft: 0,
            borderTop: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        ></View>
        <View
          style={{
            flex: 2,
            border: "1px solid gray",
            borderLeft: 0,
            borderTop: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        ></View>
        <View
          style={{
            flex: 3,
            border: "1px solid gray",
            borderLeft: 0,
            borderTop: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        ></View>
        {/*  */}
        <View style={{ flex: 9, flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              borderRight: "1px solid gray",
              borderBottom: "1px solid gray",
              justifyContent: "center",
              alignItems: "center",
              height: 40,
            }}
          >
            <Text>{vehicle?.suspensionTest?.rl}</Text>
          </View>
          <View
            style={{
              flex: 1,
              borderRight: "1px solid gray",
              borderBottom: "1px solid gray",
              justifyContent: "center",
              alignItems: "center",
              height: 40,
            }}
          >
            <Text>{vehicle?.suspensionTest?.rr}</Text>
          </View>
          <View
            style={{
              flex: 1,
              borderRight: "1px solid gray",
              borderBottom: "1px solid gray",
              justifyContent: "center",
              alignItems: "center",
              height: 40,
            }}
          >
            <Text> {vehicle?.suspensionTest?.fl}</Text>
          </View>
          <View
            style={{
              flex: 1,
              borderRight: "1px solid gray",
              borderBottom: "1px solid gray",
              justifyContent: "center",
              alignItems: "center",
              height: 40,
            }}
          >
            <Text> {vehicle?.suspensionTest?.fr}</Text>
          </View>
        </View>
        {/*  */}
        <View
          style={{
            flex: 3,
            border: "1px solid gray",
            borderTop: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        ></View>
      </View>
      {/* tr */}
      <View
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          height: 40,
          fontSize: 10,
          fontWeight: "medium",
        }}
      >
        <View
          style={{
            flex: 1,
            border: "1px solid gray",
            borderLeft: 0,
            borderTop: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>5</Text>
        </View>
        <View
          style={{
            flex: 2,
            border: "1px solid gray",
            borderLeft: 0,
            borderTop: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>م ق س ٤٨٢١</Text>
        </View>
        <View
          style={{
            flex: 2,
            border: "1px solid gray",
            borderLeft: 0,
            borderTop: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>3/6</Text>
        </View>
        <View
          style={{
            flex: 3,
            border: "1px solid gray",
            borderLeft: 0,
            borderTop: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>فحص مكابح الانتظار</Text>
        </View>
        <View
          style={{
            flex: 9,
            flexDirection: "row",
            border: "1px solid gray",
            borderLeft: 0,
            borderTop: 0,
            justifyContent: "center",
            alignItems: "center",
            height: 40,
          }}
        >
          <Text>{vehicle?.brakeTest?.parking}%</Text>
        </View>
        <View
          style={{
            flex: 3,
            border: "1px solid gray",
            borderTop: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>
            {vehicle?.brakeTest?.parking <= testLimits.parkingBrake
              ? "PASS"
              : "FAIL"}
          </Text>
        </View>
      </View>
      {/* tr */}
      <View
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          height: 40,
          fontSize: 10,
          fontWeight: "medium",
        }}
      >
        <View
          style={{
            flex: 1,
            border: "1px solid gray",
            borderBottom: "1px solid white",
            borderLeft: 0,
            borderTop: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>6</Text>
        </View>
        <View
          style={{
            flex: 2,
            border: "1px solid gray",
            borderBottom: "1px solid white",
            borderLeft: 0,
            borderTop: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>م ق س ٤٨٢١</Text>
        </View>
        <View
          style={{
            flex: 2,
            border: "1px solid gray",
            borderBottom: "1px solid white",
            borderLeft: 0,
            borderTop: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>3/6</Text>
        </View>
        <View
          style={{
            flex: 3,
            border: "1px solid gray",
            borderBottom: "1px solid white",
            borderLeft: 0,
            borderTop: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>فحص مكابح الخدمة</Text>
        </View>
        {/*  */}
        <View style={{ flex: 9, flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              borderRight: "1px solid gray",
              borderBottom: "1px solid gray",
              justifyContent: "center",
              alignItems: "center",
              height: 40,
            }}
          >
            <Text>Rear Brake </Text>
          </View>
          <View
            style={{
              flex: 1,
              borderRight: "1px solid gray",
              borderBottom: "1px solid gray",
              justifyContent: "center",
              alignItems: "center",
              height: 40,
            }}
          >
            <Text>front Brake</Text>
          </View>
        </View>
        {/*  */}
        <View
          style={{
            flex: 3,
            border: "1px solid gray",
            borderBottom: "1px solid white",
            borderTop: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>
            {vehicle?.brakeTest?.front <= testLimits.serviceBrake &&
            vehicle?.brakeTest?.front <= testLimits.serviceBrake
              ? "PASS"
              : "FAIL"}
          </Text>
        </View>
      </View>
      {/* tr */}
      <View
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          height: 40,
          fontSize: 10,
          fontWeight: "medium",
        }}
      >
        <View
          style={{
            flex: 1,
            border: "1px solid gray",
            borderLeft: 0,
            borderTop: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        ></View>
        <View
          style={{
            flex: 2,
            border: "1px solid gray",
            borderLeft: 0,
            borderTop: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        ></View>
        <View
          style={{
            flex: 2,
            border: "1px solid gray",
            borderLeft: 0,
            borderTop: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        ></View>
        <View
          style={{
            flex: 3,
            border: "1px solid gray",
            borderLeft: 0,
            borderTop: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        ></View>
        <View style={{ flex: 9, flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              borderRight: "1px solid gray",
              borderBottom: "1px solid gray",
              justifyContent: "center",
              alignItems: "center",
              height: 40,
            }}
          >
            <Text>{vehicle?.brakeTest?.rear}</Text>
          </View>
          <View
            style={{
              flex: 1,
              borderRight: "1px solid gray",
              borderBottom: "1px solid gray",
              justifyContent: "center",
              alignItems: "center",
              height: 40,
            }}
          >
            <Text> {vehicle?.brakeTest?.front}</Text>
          </View>
        </View>
        <View
          style={{
            flex: 3,
            border: "1px solid gray",
            borderTop: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        ></View>
      </View>

      <View
        style={{
          border: "1px solid gray",
          marginTop: 20,
          height: 80,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-end",
          paddingHorizontal: 10,
        }}
      >
        <Text
          style={{
            fontSize: 12,
            fontWeight: "medium",
          }}
        >
          ملاحظات
        </Text>
        <Text style={{ fontSize: 10, fontWeight: "normal" }}>{"text "}</Text>
        <Text style={{ fontSize: 10, fontWeight: "normal" }}>{"text "}</Text>
        <Text style={{ fontSize: 10, fontWeight: "normal" }}>{"text "}</Text>
      </View>
    </View>
  );
};

export default PageThree;
