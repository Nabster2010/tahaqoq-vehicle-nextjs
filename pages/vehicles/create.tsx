import VehicleCreateForm from "../../components/VehicleCreateForm";

const initialState = {
  customerId: "",
  port: "",
  vin: "",
  reqNo: "",
  bayanNo: "",
  reqDate: "",
  bayanDate: "",
  paymentType: "",
  price: 300,
  tax: 45,
};
const CreateVehicle = () => {
  return <VehicleCreateForm initialState={initialState} />;
};

export default CreateVehicle;
