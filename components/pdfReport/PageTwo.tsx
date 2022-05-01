import { Text, View } from "@react-pdf/renderer";

const PageTwo = ({ vehicle }) => {
  const { visualInspection } = vehicle;
  const result = (test) => {
    if (visualInspection?.[test] === 1) {
      return "Pass";
    }
    return "Fail";
  };
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
            <View style={{ height: 16, display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  border: "1px solid gray",

                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>{result("saftyBelts")}</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",

                  flex: 7,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ paddingRight: 2 }}>احزمة الامان</Text>
              </View>
              <View
                style={{
                  border: "1px solid gray",

                  flex: 1,
                  borderLeft: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>24</Text>
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
                  height: 17,
                }}
              >
                <Text>{result("fireExtinguisher")}</Text>
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
                  طفاية الحريق ومثلث الخطر
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
                <Text>25</Text>
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
                <Text>{result("rustCorrosion")}</Text>
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
                <Text style={{ paddingRight: 2 }}>الصدأ والتآكل والاهتراء</Text>
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
                <Text>26</Text>
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
                <Text>{result("sunVisors")}</Text>
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
                <Text style={{ paddingRight: 2 }}>حاجبات الشمس</Text>
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
                <Text>27</Text>
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
                  الفحص السفلي
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
                <Text>{result("ballJoints")}</Text>
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
                  الوصلات الكرويه لنظام التوجية
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
                <Text>28</Text>
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
                <Text>{result("mountingBase")}</Text>
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
                  قاعدة تركيب صندوق تروس عجله القياده{" "}
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
                <Text>29</Text>
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
                <Text>{result("steeringCircuit")}</Text>
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
                  دائرة التوجية الهيدروليكية
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
                <Text>30</Text>
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
                <Text>{result("steeringRods")}</Text>
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
                <Text style={{ paddingRight: 2 }}> مجموعة اذرعة التوجية</Text>
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
                <Text>31</Text>
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
                <Text>{result("hosesPipes")}</Text>
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
                <Text style={{ paddingRight: 2 }}>خراطيم -انابيب -وصلات</Text>
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
                <Text>32</Text>
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
                <Text>{result("brakeDiscs")}</Text>
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
                <Text style={{ paddingRight: 2 }}>اقراص الفرامل والهوبات</Text>
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
                <Text>33</Text>
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
                <Text>{result("brakeCylinders")}</Text>
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
                <Text style={{ paddingRight: 2 }}> اسطوانة نظام الفرامل </Text>
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
                <Text>34</Text>
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
                <Text>{result("fittings")}</Text>
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
                  تجهيزات الفرامل الهوائية{" "}
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
                <Text>35</Text>
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
                <Text>{result("stabilizerBar")}</Text>
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
                <Text style={{ paddingRight: 2 }}> عمود التوازن وجلبه </Text>
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
                <Text>36</Text>
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
                <Text>{result("frontSuspension")}</Text>
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
                <Text style={{ paddingRight: 2 }}> نظام التعليق الامامي </Text>
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
                <Text>37</Text>
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
                <Text>{result("rearSuspension")}</Text>
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
                <Text style={{ paddingRight: 2 }}> نظام التعليق الخلفي </Text>
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
                <Text>38</Text>
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
                <Text>{result("frontSprings")}</Text>
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
                <Text style={{ paddingRight: 2 }}>النوابض الامامية </Text>
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
                <Text>39</Text>
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
                <Text>{result("rearSprings")}</Text>
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
                <Text style={{ paddingRight: 2 }}>النوابض الخلفية </Text>
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
                <Text>40</Text>
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
                <Text>{result("tires")}</Text>
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
                <Text style={{ paddingRight: 2 }}> الاطارات والجنوط </Text>
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
                <Text>41</Text>
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
                <Text>{result("shockAbsorbers")}</Text>
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
                  ممتص الصدمات- المساعدات{" "}
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
                <Text>42</Text>
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
                <Text>{result("engineMountings")}</Text>
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
                  قواعد المحرك كراسي المكينه{" "}
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
                <Text>43</Text>
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
                <Text>{result("reverseLights")}</Text>
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
                <Text style={{ paddingRight: 2 }}>انوار السير الخلفية </Text>
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
                <Text>44</Text>
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
                <Text>{result("transimissionParts")}</Text>
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
                  اجزاء ناقل الحركة عمود الكردان عمودالدوران{" "}
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
                <Text>45</Text>
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
                <Text>{result("reverseLights")}</Text>
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
                <Text style={{ paddingRight: 2 }}>انوار الرجوع الي الخلف </Text>
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
                <Text>46</Text>
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
                <Text>{result("fuelTank")}</Text>
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
                  خزان الوقود وخطوط التوصيل للوقود{" "}
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
                <Text>47</Text>
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
                <Text>{result("speedometerCable")}</Text>
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
                <Text style={{ paddingRight: 2 }}> سلك عداد السرعة </Text>
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
                <Text>48</Text>
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
                <Text>{result("chassis")}</Text>
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
                  الهيكل الشاسيه والجسور والقواطع{" "}
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
                <Text>49</Text>
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
                <Text>{result("floorRust")}</Text>
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
                  الصدأ والتآكل بأرضية المركبة
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
                <Text>50</Text>
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
                <Text>{result("oilLeaks")}</Text>
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
                  تهريب الزيوت بأسفل المركبة{" "}
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
                <Text>51</Text>
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
                <Text>{result("conformityCertificate")}</Text>
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
                <Text>{result("isTaxi")}</Text>
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
                <Text>{result("isSalvage")}</Text>
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
                <Text>{result("isPolice")}</Text>
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
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>{result("fuelEconomy")}</Text>
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
                <Text style={{ paddingRight: 2 }}>كفاءة استهلاك الوقود</Text>
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
                <Text>E</Text>
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
                <Text>{result("vehiclePaint")}</Text>
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
                <Text>{result("vehicleChassis")}</Text>
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
                <Text>{result("vehiclePlate")}</Text>
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
                <Text>{result("installationPoints")}</Text>
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
                <Text>{result("brakeSystem")}</Text>
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
                <Text>{result("wiringSystem")}</Text>
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
                <Text>{result("headLights")}</Text>
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
                <Text>{result("parkingLights")}</Text>
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
                <Text style={{ paddingRight: 2 }}> انوار الانتظار </Text>
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
                <Text>8</Text>
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
                <Text>{result("signalLights")}</Text>
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
                  انوار الاشارات الامامية والجانبية{" "}
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
                <Text>9</Text>
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
                <Text>{result("warningLights")}</Text>
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
                <Text style={{ paddingRight: 2 }}>انوار التوقف المفاجئ </Text>
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
                <Text>10</Text>
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
                <Text>{result("horn")}</Text>
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
                  اداة التنبية الصوتي البوق
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
                <Text>11</Text>
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
                <Text>{result("windshield")}</Text>
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
                <Text style={{ paddingRight: 2 }}>زجاج المركبة</Text>
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
                <Text>12</Text>
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
                <Text>{result("wipers")}</Text>
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
                  مساحات وغسيل الزجاج الخلفي والامامي{" "}
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
                <Text>13</Text>
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
                <Text>{result("tinting")}</Text>
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
                  التظليل والتعتيم الامامي والخلفي وزجاج الابواب
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
                <Text>14</Text>
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
                <Text>{result("mirrors")}</Text>
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
                  مرايا الرؤية الجانبية والمراءه الداخليه{" "}
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
                <Text>15</Text>
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
                <Text>{result("doors")}</Text>
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
                  الابواب ومفصلاتها وغطاء المحرك{" "}
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
                <Text>16</Text>
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
                <Text>{result("tires")}</Text>
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
                <Text style={{ paddingRight: 2 }}>الاطارات </Text>
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
                <Text>17</Text>
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
                <Text>{result("nuts")}</Text>
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
                <Text style={{ paddingRight: 2 }}>العجلات وصواميلها </Text>
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
                <Text>18</Text>
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
                <Text>{result("dashboardLights")}</Text>
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
                <Text style={{ paddingRight: 2 }}>مؤشرات لوحة القيادة </Text>
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
                <Text>19</Text>
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
                <Text>{result("doors")}</Text>
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
                <Text style={{ paddingRight: 2 }}>الابواب ووسائل الامان </Text>
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
                <Text>20</Text>
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
                <Text>{result("tailLights")}</Text>
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
                <Text style={{ paddingRight: 2 }}>انوار السير للخلف </Text>
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
                <Text>21</Text>
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
                <Text>{result("turnSignalLights")}</Text>
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
                  انوار اشارات الدوران الخلفية{" "}
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
                <Text>22</Text>
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
                <Text>{result("brakeLights")}</Text>
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
                <Text style={{ paddingRight: 2 }}>انوار الفرامل </Text>
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
                <Text>23</Text>
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

export default PageTwo;
