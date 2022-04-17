import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getVehicleById } from "../../../app/reducer/vehicleSlice";
import NotFound from "../../../components/NotFound";
import Spinner from "../../../components/Spinner";
import { addLeadingZeros } from "../../../utils";

const Invoice = () => {
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
    <div className="mx-auto h-[29.7cm] w-[21cm] border  px-4 py-4">
      <Header />
      <InvoiceInfo vehicle={vehicle} />
      <CustomerData vehicle={vehicle} />
      <InvoiceItems vehicle={vehicle} />
      <InvoiceTotal />
      <InvoiceFooter />
    </div>
  );
};

export default Invoice;

const Header = () => {
  return (
    <div className="flex items-center justify-between border-b-2 ">
      <div>
        <Image alt="" src="/images/logo.svg" width={100} height={100} />
      </div>
      <div className="text-right">
        شركة التحقق الدولية
        <br />
        Tahaqoq International Company
      </div>
    </div>
  );
};

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
  return (
    <>
      <div className="bg-gray-200 py-2 text-center ">
        <h1 className="text-2xl font-bold">Tax Invoice فاتورة ضريبية</h1>
      </div>
      <div className="my-2 flex w-full items-center justify-center">
        <div className="flex-1 text-left font-bold">
          <h1>Invoice No:</h1>
          <h1>Invoice Date:</h1>
        </div>
        <div className="flex-1 text-center text-gray-500">
          <h1>{`DNV/2022/${vehicle.id}`}</h1>
          <h1>{date}</h1>
        </div>
        <div className="flex-1 text-right font-bold">
          <h1>:رقم الفاتورة</h1>
          <h1>:تاريخ الفاتورة</h1>
        </div>
        <div className="mr-auto flex-1">
          <div className="flex items-end justify-end">
            <QRCodeSVG value={invoiceData} size={100} />
          </div>
        </div>
      </div>
    </>
  );
};

const CustomerData = ({ vehicle }) => {
  return (
    <>
      <div className="bg-gray-200 py-2 text-center ">
        <h1 className="text-lg font-bold">Customer Info بيانات العميل</h1>
      </div>
      <div className="my-2 flex w-full items-center justify-center">
        <div className="flex-1 text-left font-bold">
          <h1>Name:</h1>
          <h1>Address:</h1>
          <h1>Phone:</h1>
          <h1>Email:</h1>
          <h1>Website:</h1>
          <h1>Tax Id:</h1>
        </div>
        <div className="flex-1 text-center text-gray-500">
          <h1>{vehicle?.customer?.name}</h1>
          <h1>{vehicle?.customer?.address}</h1>
          <h1>{vehicle?.customer?.phone}</h1>
          <h1>{vehicle?.customer?.email}</h1>
          <h1>{vehicle?.customer?.website}</h1>
          <h1>{vehicle?.customer?.taxId}</h1>
        </div>
        <div className="flex-1 text-right font-bold">
          <h1>:الاسم </h1>
          <h1>:العنوان</h1>
          <h1>:هاتف</h1>
          <h1>:بريد الكتروني</h1>
          <h1>:موقع الكتروني</h1>
          <h1>:الرقم الضريبي</h1>
        </div>
      </div>
    </>
  );
};

const InvoiceItems = ({ vehicle }) => {
  const reportNo = addLeadingZeros(vehicle.id, 5);

  return (
    <>
      <div className="bg-gray-200 py-2 text-center ">
        <h1 className="text-lg font-bold">Invoice Items الاصناف</h1>
      </div>
      <div>
        <table className="mt-2 w-full text-left text-sm text-black ">
          <thead className=" text-xs  text-black">
            <tr className="border-b-2 bg-gray-100">
              <th className="px-2 py-3">
                Name
                <br />
                الصنف
              </th>
              <th className="px-2 py-3">
                Req No
                <br />
                طلب رقم
              </th>
              <th className="px-2 py-3">
                Vin
                <br />
                رقم الهيكل
              </th>
              <th className="px-2 py-3">
                Report
                <br />
                تقرير
              </th>
              <th className="px-2 py-3">
                Port
                <br />
                المنفذ
              </th>

              <th className="px-2 py-3">
                Price
                <br />
                السعر
              </th>
              <th className="px-2 py-3">
                Qty
                <br />
                الكمية
              </th>
              <th className="px-2 py-3">
                Vat
                <br />
                ضريبة
              </th>
              <th className="px-2 py-3">
                Total
                <br />
                الاجمالي
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b ">
              <td className="border-x px-2 py-4 ">فحص مركبة </td>
              <td className="border-x px-2  py-4">{vehicle.reqNo}</td>
              <td className="border-x px-2 py-4 ">{vehicle.vin}</td>
              <td className="border-x px-2  py-4">TD{reportNo}</td>
              <td className="border-x px-2  py-4">{vehicle.port}</td>
              <td className="border-x px-2 py-4 ">{vehicle.price}</td>
              <td className="border-x px-2  py-4">1</td>
              <td className="border-x px-2  py-4">{vehicle.tax}</td>
              <td className="border-x px-2  py-4">345</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

const InvoiceTotal = () => {
  return (
    <>
      <div className="flex items-center justify-between bg-gray-200 px-4 py-2 text-center ">
        <h1 className="text-lg font-bold">Total :</h1>
        <h1 className="text-lg font-bold"> : الاجمالي</h1>
      </div>
      <div>
        <table className="w-full">
          <tbody>
            <tr className=" w-full  border-b">
              <td className="w-1/3 px-3 py-2 text-left">
                Total(Excluding VAT)
              </td>
              <td className="w-1/3 px-3 py-2  text-center">300 SAR </td>
              <td className="w-1/3 px-3 py-2 text-right">
                الاجمالي غير شامل ضريبة القيمة المضافة
              </td>
            </tr>
            <tr className=" w-full  border-b">
              <td className="w-1/3 px-3 py-2 text-left">VAT</td>
              <td className="w-1/3 px-3 py-2  text-center">45 SAR </td>
              <td className="w-1/3 px-3 py-2 text-right">
                ضريبة القيمة المضافة
              </td>
            </tr>
            <tr className=" w-full  border-b">
              <td className="w-1/3 px-3 py-2 text-left">TOTAL</td>
              <td className="w-1/3 px-3 py-2  text-center">345 SAR </td>
              <td className="w-1/3 px-3 py-2 text-right">
                الاجمالي شامل ضريبة القيمة المضافة
              </td>
            </tr>
            <tr className=" w-full  border-b">
              <td colSpan={2} className=" px-3 py-2 text-left font-semibold">
                Three hundred fourty five riyals
              </td>
              <td className=" px-3 py-2 text-right font-semibold">
                فقط مبلغ ثلاثمائة وخمسة واربعون ريال
              </td>
            </tr>
          </tbody>
        </table>
        <div className="my-2 flex items-center justify-between bg-gray-100 px-3 py-4 font-semibold">
          <h1> Vat registration number :</h1>
          <h1> 31226063500003 </h1>
          <h1>: رقم التسجيل الضريبي</h1>
        </div>
      </div>
    </>
  );
};

const InvoiceFooter = () => {
  return (
    <div className="mt-12 flex justify-between border-t-4 pt-2 text-sm ">
      <div className="flex-1 text-left">
        <h1 className="">TAHAQOQ CO./ TAHAQOQ VEHICLES</h1>
        <h1 className="">INSPECTION CENTER /DAMMAM BRANSH</h1>
        <h1 className="">Address:Dammam,Khalidyah,KSA</h1>
        <h1 className="">Mob:+96657765665</h1>
        <h1 className="">Email:info@tahaqoq.com</h1>
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
