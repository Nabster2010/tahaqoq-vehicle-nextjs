import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getVehicleById } from "../../../app/reducer/vehicleSlice";
import NotFound from "../../../components/NotFound";
import Spinner from "../../../components/Spinner";

const Report = () => {
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
    <div className="mx-auto w-[21cm]">
      <FirstPage vehicle={vehicle} />
      <SecondPage vehicle={vehicle} />
      <ThirdPage vehicle={vehicle} />
    </div>
  );
};

export default Report;

const Header = () => {
  return (
    <div className="mt-4 flex items-start justify-between border-b-2 border-gray-700 pb-4 ">
      <div className="flex-1">
        <Image alt="" src="/images/logo.svg" width={100} height={100} />
      </div>
      <div className="flex-1 text-center">
        <div>
          <h1>INSPECTION REPORT </h1>
          <p>تقرير الفحص</p>
        </div>
        <div>
          <h1>TD122222 :رقم التقرير</h1>
          <span>تاريخ :</span>
          <span>28/07/1443</span>
          <span>الموافق :</span>
          <span>01/03/2022</span>
        </div>
      </div>
      <div className="flex-1 text-right">
        شركة التحقق الدولية لفحص السيارات
        <br />
        TAHAQOQ International Vehicles Inspection Center - Dammam
      </div>
    </div>
  );
};

const ReportFooter = ({ pageNo }) => {
  const totalPages = 3;
  return (
    <div className="mt-12 flex justify-between border-t-4 pt-2 text-sm ">
      <div className="flex-1 text-left">
        <h1 className="">TAHAQOQ CO./ TAHAQOQ VEHICLES</h1>
        <h1 className="">INSPECTION CENTER /DAMMAM BRANSH</h1>
        <h1 className="">Address:Dammam,Khalidyah,KSA</h1>
        <h1 className="">Mob:+96657765665</h1>
        <h1 className="">Email:info@tahaqoq.com</h1>
      </div>
      <div>
        <Image alt="" src="/images/logo.svg" width={100} height={50} />
        <p>
          page {pageNo} of {totalPages}
        </p>
      </div>
      <div className="flex-1 text-right">
        <h1 className="">شركة التحقق الدولية </h1>
        <h1 className="">مركز فحص السيارات -الدمان</h1>
        <h1 className="">العنوان :الدمام -الخالدية</h1>
        <h1 className="">Mob:+96657765665</h1>
        <h1 className="">Email:info@tahaqoq.com</h1>
      </div>
      <div></div>
    </div>
  );
};

const FirstPage = ({ vehicle }) => {
  const date = new Date(vehicle.createdAt).toLocaleDateString("en-GB");

  return (
    <div className="mx-auto h-[29.7cm] w-[21cm]  px-8 py-4">
      <Header />
      <section className="my-8 flex text-right">
        <table className="w-full">
          <tbody>
            <tr className=" w-full">
              <td className=" border py-2">2MEFM74W28X656444 </td>
              <td className="w-36 border py-2">رقم الهيكل </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="my-8">
        <div className=" flex w-full gap-2 text-right">
          <table className="w-[40%]">
            <tbody>
              <tr className=" w-full">
                <td className=" border py-2">5</td>
                <td className="w-36 border py-2 font-semibold">عدد الركاب</td>
              </tr>
            </tbody>
          </table>
          <table className="w-[60%]">
            <tbody>
              <tr className=" w-full">
                <td className="border py-2">
                  مختبر التحقق الدولية لفحص السيارات بالدمام{" "}
                </td>
                <td className="w-36 border py-2 font-semibold">مكان الفحص </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" flex w-full gap-2  text-right">
          <table className="w-[40%]">
            <tbody>
              <tr className=" w-full">
                <td className=" border border-t-0 py-2">19901 </td>
                <td className="w-36 border border-t-0 py-2 font-semibold">
                  قراءة العداد
                </td>
              </tr>
            </tbody>
          </table>
          <table className="w-[60%]">
            <tbody>
              <tr className=" w-full">
                <td className="border border-t-0 py-2">الخفجي </td>
                <td className="w-36 border border-t-0 py-2 font-semibold">
                  الجهة الطالبة للفحص{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" flex w-full gap-2  text-right">
          <table className="w-[40%]">
            <tbody>
              <tr className=" w-full">
                <td className=" border border-t-0 py-2">FORD </td>
                <td className="w-36 border border-t-0 py-2 font-semibold">
                  نوع المركبة{" "}
                </td>
              </tr>
            </tbody>
          </table>
          <table className="w-[60%]">
            <tbody>
              <tr className=" w-full">
                <td className="border border-t-0 py-2">5565 </td>
                <td className="w-36 border border-t-0 py-2 font-semibold">
                  رقم بيان الاستيراد{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" flex w-full gap-2  text-right">
          <table className="w-[40%]">
            <tbody>
              <tr className=" w-full">
                <td className=" border border-t-0 py-2">MUSTANG </td>
                <td className="w-36 border border-t-0 py-2 font-semibold">
                  الطراز{" "}
                </td>
              </tr>
            </tbody>
          </table>
          <table className="w-[60%]">
            <tbody>
              <tr className=" w-full">
                <td className="border border-t-0 py-2">12/10/1442 </td>
                <td className="w-36 border border-t-0 py-2 font-semibold">
                  تاريخ بيان الاستيراد{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" flex w-full gap-2  text-right">
          <table className="w-[40%]">
            <tbody>
              <tr className=" w-full">
                <td className=" border border-t-0 py-2">2020 </td>
                <td className="w-36 border border-t-0 py-2 font-semibold">
                  الموديل{" "}
                </td>
              </tr>
            </tbody>
          </table>
          <table className="w-[60%]">
            <tbody>
              <tr className=" w-full">
                <td className="border border-t-0 py-2">01/01/2022 </td>
                <td className="w-36 border border-t-0 py-2 font-semibold">
                  تاريخ استلام المركبة{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" flex w-full gap-2  text-right">
          <table className="w-[40%]">
            <tbody>
              <tr className=" w-full">
                <td className=" border border-t-0 py-2">رمادي </td>
                <td className="w-36 border border-t-0 py-2 font-semibold">
                  اللون{" "}
                </td>
              </tr>
            </tbody>
          </table>
          <table className="w-[60%]">
            <tbody>
              <tr className=" w-full">
                <td className="border border-t-0 py-2">6455 </td>
                <td className="w-36 border border-t-0 py-2 font-semibold">
                  رقم الاحالة{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" flex w-full gap-2  text-right">
          <table className="w-[40%]">
            <tbody>
              <tr className=" w-full">
                <td className=" border border-t-0 py-2">اليابان </td>
                <td className="w-36 border border-t-0 py-2 font-semibold">
                  البلد المستورد منه{" "}
                </td>
              </tr>
            </tbody>
          </table>
          <table className="w-[60%]">
            <tbody>
              <tr className=" w-full">
                <td className="border border-t-0 py-2">محمد محمد محمد </td>
                <td className="w-36 border border-t-0 py-2 font-semibold">
                  اسم المستورد{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* result */}
      <section className="mt-24 flex items-center justify-center text-center font-bold">
        <table>
          <tbody>
            <tr>
              <td className="w-32 border py-2"> مطابق </td>
              <td className="w-32 border py-2">: نتيجة الفحص</td>
            </tr>
          </tbody>
        </table>
      </section>
      {/* manager section */}
      <section className="mt-16">
        <div className="flex items-end justify-center gap-2">
          <div className="text-right">
            <table>
              <tbody>
                <tr>
                  <td className="w-32 border py-1 font-semibold">
                    {" "}
                    عبدالحكيم البريه
                  </td>
                  <td className="w-32 border py-1 font-semibold">
                    : المدير الفني
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex h-36 w-64 items-center justify-center bg-gray-100">
              signture
            </div>
          </div>
          <div className="flex h-36 w-64 items-center justify-center bg-gray-100">
            stamp
          </div>
        </div>
      </section>
      <footer>
        <ReportFooter pageNo={1} />
      </footer>
    </div>
  );
};

const SecondPage = ({ vehicle }) => {
  return (
    <div className="mx-auto h-[29.7cm] w-[21cm]   px-8 py-4">
      <Header />
      <section className="mt-4 text-center">
        <h1 className="text-2xl font-bold">
          تقرير الفحص الخارجي والفحص السفلي
        </h1>
        <div className=" mt-4 flex items-start justify-between gap-6 ">
          <table
            className="mb-8 w-1/2
           text-sm"
          >
            <tbody>
              <tr className="border">
                <td>Pass</td>
                <td className="border-x">احزمة الامان</td>
                <td className="w-12">25</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">
                  طفاية الحريق ومثلث التحذير وحقسبة الاسعاف
                </td>
                <td className="w-12">26</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">الصدأ والتاكل والاهتراء</td>
                <td className="w-12">27</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">حاجبات الشمس </td>
                <td className="w-12">28</td>
              </tr>
              <tr className="border border-t-0">
                <td colSpan={3} className=" w-full text-center font-bold">
                  الفحص السفلي بند ٨/٦ م ق س ١٢٨٤
                </td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">الوصلات الكروية لنظام التوجيه</td>
                <td className="w-12">29</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">قاعدة تركيب صندوق التروس</td>
                <td className="w-12">30</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">دائرة التوجيه الهيدروليكية</td>
                <td className="w-12">31</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">مجموعة اذرعة التوجيه</td>
                <td className="w-12">32</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">
                  خراطيم/انابيب/وصلات الفرامل /وصلات فرملة اليد
                </td>
                <td className="w-12">33</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">اقراص الفرامل والهوبات</td>
                <td className="w-12">34</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">اسطوانات نظام الفرامل</td>
                <td className="w-12">35</td>
              </tr>

              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">تجهيزات الفرامل الهوائية</td>
                <td className="w-12">36</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">عمود التوازن وجلبه</td>
                <td className="w-12">37</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">نظام التعليق الامامي</td>
                <td className="w-12">38</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">نظام التعليق الخلفي</td>
                <td className="w-12">39</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">النوابض الامامية</td>
                <td className="w-12">40</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">النوابض الخلفية</td>
                <td className="w-12">41</td>
              </tr>
              <tr className="border border-t-0">
                <td colSpan={3} className=" w-full text-center font-bold">
                  الاطارات والجنوط بند ٦/٨/١٤{" "}
                </td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">ممتص الصدمات - المساعدات</td>
                <td className="w-12">42</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">قواعدالمحرك - كراسي الماكينة </td>
                <td className="w-12">43</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">انوار السير الخلفية</td>
                <td className="w-12">44</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">
                  اجزاء ناقل الحركة -عمود الكردان-عمود الدوران
                </td>
                <td className="w-12">45</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">انوار الرجوع للخلف</td>
                <td className="w-12">46</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">خزان الوقود وخطوط توصيل الوقود</td>
                <td className="w-12">47</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">سلك عداد السرعة</td>
                <td className="w-12">48</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">الهيكل -الشاصية والجسور والقواطع</td>
                <td className="w-12">49</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">الصدأ والتاكل بارضية المركبة</td>
                <td className="w-12">50</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">تهريب الزيوت بأسفل المركبة</td>
                <td className="w-12">51</td>
              </tr>
            </tbody>
          </table>
          <table
            className="w-1/2 
           text-sm"
          >
            <tbody>
              <tr className="border ">
                <td colSpan={3} className=" w-full text-center font-bold">
                  متطلبات القبول والرفض{" "}
                </td>
              </tr>
              <tr className="border">
                <td>Pass</td>
                <td className="border-x">شهادة مطابقة خليجية لنفس الطراز</td>

                <td className="w-12">A</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">السيارة ليست من سيارات الاجرة </td>
                <td className="w-12">B</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">
                  {" "}
                  السيارة لم تختم بعبارة سالفج او غرق{" "}
                </td>
                <td className="w-12">C</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x"> السيارة ليست من سيارات البوليس </td>
                <td className="w-12">D</td>
              </tr>
              <tr className="border border-t-0">
                <td colSpan={3} className=" w-full text-center font-bold">
                  الفحص الخارجي بند ١/٦ م ق س ١٢٨٤
                </td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">لون المركبة</td>
                <td className="w-12">1</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">الرقم المميز للمركبة</td>
                <td className="w-12">2</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x"> اللوحات المعدنية للمركبة</td>
                <td className="w-12">3</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x"> نقاط تثبيت جسم المركبة</td>
                <td className="w-12">4</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">
                  مجموعة الاسطوانات الرئيسية للفرامل وخزان سائل الفرامل{" "}
                </td>
                <td className="w-12">5</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">
                  {" "}
                  حاله الضفيرة والنظام الكهربائي والبطارية
                </td>
                <td className="w-12">6</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x"> الانوار الاماميه</td>
                <td className="w-12">7</td>
              </tr>

              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x"> انوار الانتظار</td>
                <td className="w-12">8</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x"> انوار الاشارات الامامية والجانبية</td>
                <td className="w-12">9</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x"> انوار التوقف المفاجئ</td>
                <td className="w-12">10</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x"> اداه التنبية الصوتي</td>
                <td className="w-12">11</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x"> زجاج المركبة</td>
                <td className="w-12">12</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">
                  {" "}
                  مساحات وغسيل الزجاج الامامي والخلفي
                </td>
                <td className="w-12">13</td>
              </tr>

              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">
                  التظليل والتعتيم للزجاج الامامي والخلفي وزجاج الابواب
                </td>
                <td className="w-12">14</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">
                  مرايا الرؤية الجانبية والمرآه الداخلية للرؤيا الخلفية
                </td>
                <td className="w-12">15</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">
                  {" "}
                  الابواب ومفصلاتها وغطاء المحرك وغطاء الصندوق الخلفي
                </td>
                <td className="w-12">16</td>
              </tr>
              <tr className="border border-t-0">
                <td colSpan={3} className=" w-full text-center font-bold">
                  الاطارات بند ٦/١/١٩{" "}
                </td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">العجلات وصواميلها </td>
                <td className="w-12">17</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x"> مؤشرات لوحة القيادة</td>
                <td className="w-12">18</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">الابواب ووسائل الامان</td>
                <td className="w-12">19</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">انوار السير للخلف</td>
                <td className="w-12">20</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x">انوار اشارات الدوران</td>
                <td className="w-12">21</td>
              </tr>
              <tr className="border border-t-0">
                <td>Pass</td>
                <td className="border-x"> انوار الفرامل</td>
                <td className="w-12">22</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <ReportFooter pageNo={2} />
    </div>
  );
};

const ThirdPage = ({ vehicle }) => {
  return (
    <div className="mx-auto h-[29.7cm] w-[21cm]   px-8 py-4">
      <Header />
      <section className="mt-4 text-center">
        <h1 className="text-2xl font-bold">تقرير الفحوصات الفنية</h1>
        <table className="mt-8 w-full table-auto border ">
          <tbody>
            <tr className=" align-center justify-start border text-lg font-bold">
              <td className="w-16 border-x">{"المطابقة (اجتاز /لم يجتز)"} </td>
              <td colSpan={12} className=" border-x">
                النتائج
              </td>
              <td className=" w-28 border-x">اسم الفحص</td>
              <td className="w-14 border-x">البند</td>
              <td className="w-20 border-x">المواصفة</td>
              <td className="w-8 border-x">.م</td>
            </tr>
            <tr className=" align-center border border-t-0 ">
              <td rowSpan={2} className=" border-x">
                {"Pass"}
              </td>
              <td colSpan={4} className="border-x">
                وقود الديزل{" "}
              </td>
              <td colSpan={4} className="border-x">
                هيدروكربونات{" "}
              </td>
              <td colSpan={4} className="border-x">
                اول اكسيد الكربون
              </td>
              <td className="border-x">
                <span> فحص غازات العادم</span>
                <br />
                <span>بنزين:</span>
                <span>اول اكسيد الكربون وغاز الهيدروكربون</span>
              </td>
              <td className="border-x">1/4/6</td>
              <td rowSpan={2} className="border-x">
                م ق س ١٢٨٤
              </td>
              <td rowSpan={2} className="border-x ">
                1
              </td>
            </tr>
            <tr className=" align-center border border-t-0">
              <td colSpan={4} className="border-x">
                {20}
              </td>
              <td colSpan={4} className="border-x">
                {8}ppm{" "}
              </td>
              <td colSpan={4} className="border-x">
                {0.02}
              </td>
              <td className="border-x">
                <span> فحص غازات العادم</span>
                <br />
                <span>ديزل:</span>
                <span> مقدار كثافة الدخان</span>
              </td>
              <td className="border-x">2/4/6</td>
            </tr>
            <tr className="align-center h-20 border border-t-0 py-3">
              <td className=" border-x">{"Pass"}</td>
              <td colSpan={12} className="border-x ">
                {0.3}
              </td>
              <td className=" border-x">فحص انحراف العجلات-انزلاق العجلات </td>
              <td className=" border-x">2/6</td>
              <td className=" border-x">م ق س ١٢٨٤</td>
              <td className=" border-x">2</td>
            </tr>
            <tr className=" align-center h-20 border border-t-0">
              <td className=" border-x">{"Pass"}</td>
              <td colSpan={12} className="border-x">
                {130} cd
              </td>
              <td className=" border-x">فحص شدة واستقامة شعاع الانوار </td>
              <td className=" border-x">5/6</td>
              <td className=" border-x">م ق س ١٢٨٤</td>
              <td className=" border-x">3</td>
            </tr>
            <tr className="align-center h-12 border border-t-0 ">
              <td rowSpan={2} className=" border-x">
                {"Pass"}
              </td>
              <td colSpan={3} className="border-x">
                محور خلفي يسار
              </td>
              <td colSpan={3} className="border-x">
                محور خلفي يمين
              </td>
              <td colSpan={3} className="border-x">
                محور امامي يسار{" "}
              </td>
              <td colSpan={3} className="border-x">
                محور امامي يمين{" "}
              </td>
              <td rowSpan={2} className="border-x">
                فحص نظام التعليق{" "}
              </td>
              <td rowSpan={2} className="border-x">
                7/6
              </td>
              <td rowSpan={2} className="border-x">
                م ق س ١٢٨٤
              </td>
              <td rowSpan={2} className="border-x ">
                4
              </td>
            </tr>
            <tr className="align-center h-12 border border-t-0">
              <td colSpan={3} className="border-x">
                {65}
              </td>
              <td colSpan={3} className="border-x">
                {66}
              </td>
              <td colSpan={3} className="border-x">
                {60}
              </td>
              <td colSpan={3} className="border-x">
                {61}
              </td>
            </tr>
            <tr className="align-center h-20 border border-t-0">
              <td className=" border-x">{"Pass"}</td>
              <td colSpan={12} className=" border-x">
                {27} %
              </td>
              <td className=" border-x">فحص مكابح الانتظار </td>
              <td className=" border-x">3/6</td>
              <td className=" border-x">م ق س ١٢٨٤</td>
              <td className=" border-x">5</td>
            </tr>
            <tr className="align-center h-12 border border-t-0 ">
              <td rowSpan={2} className=" border-x">
                {"Pass"}
              </td>

              <td colSpan={6} className="border-x">
                Rear Brake {"(%)"}
              </td>
              <td colSpan={6} className="border-x">
                Front Brake {"(%)"}
              </td>
              <td rowSpan={2} className="border-x">
                فحص مكابح الخدمة{" "}
              </td>
              <td rowSpan={2} className="border-x">
                3/6
              </td>
              <td rowSpan={2} className="border-x">
                م ق س ١٢٨٤
              </td>
              <td rowSpan={2} className="border-x ">
                6
              </td>
            </tr>
            <tr className="align-center h-12 border border-t-0">
              <td colSpan={6} className="border-x">
                {64}
              </td>
              <td colSpan={6} className="border-x">
                {63}
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <ReportFooter pageNo={3} />
    </div>
  );
};
