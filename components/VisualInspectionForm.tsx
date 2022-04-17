import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const VisualInspectionForm = () => {
  const router = useRouter();
  const { id } = router.query;
  const [visualInspection, setVisualInspection] = useState<any>({});
  useEffect(() => {
    //get the initialState
    if (id) {
      axios.get(`/api/vehicles/${id}`).then((res) => {
        setVisualInspection(res.data.visualInspection);
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVisualInspection({ ...visualInspection, [name]: Number(value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.put(
        `/api/visualInspection/${visualInspection.id}`,
        visualInspection
      );
      toast.success("Vehicle inspection saved");
      router.push(`/vehicles/${id}/result`);
    } catch (error) {
      const msg =
        error?.response?.data?.message || "Error Saving Visual Inspection";
      toast.error(msg);
    }
  };

  return (
    <>
      <h1 className="mt-8 mb-8 text-center text-xl font-bold text-gray-700 underline dark:text-white ">
        Visual Inspection
      </h1>
      <form
        className="grid gap-6 sm:grid-cols-6 md:grid-cols-6"
        onSubmit={handleSubmit}
      >
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="conformityCertificate"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            conformity Certificate :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.conformityCertificate}
            id="conformityCertificate"
            name="conformityCertificate"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="isTaxi"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Not Taxi :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.isTaxi}
            id="isTaxi"
            name="isTaxi"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="isArmoured"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Not Armoured :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.isArmoured}
            id="isArmoured"
            name="isArmoured"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="isSalvage"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Not Salvage :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.isSalvage}
            id="isSalvage"
            name="isSalvage"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="isPolice"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Not A police Vehicle :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.isPolice}
            id="isPolice"
            name="isPolice"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="vehiclePaint"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            {"Vehicle's"} Paint :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.vehiclePaint}
            id="vehiclePaint"
            name="vehiclePaint"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="vehicleChassis"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            {"Vehicle's"} Chassis :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.vehicleChassis}
            id="vehicleChassis"
            name="vehicleChassis"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="vehiclePlate"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Vehicle Plate :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.vehiclePlate}
            id="vehiclePlate"
            name="vehiclePlate"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="installationPoints"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Installation Points :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.installationPoints}
            id="installationPoints"
            name="installationPoints"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="brakeSystem"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Brake System :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.brakeSystem}
            id="brakeSystem"
            name="brakeSystem"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="wiringSystem"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Wiring System :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.wiringSystem}
            id="wiringSystem"
            name="wiringSystem"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="headLights"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Head Lights :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.headLights}
            id="headLights"
            name="headLights"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="parkingLights"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Parking Lights :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.parkingLights}
            id="parkingLights"
            name="parkingLights"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="signalLights"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Signal Lights :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.signalLights}
            id="signalLights"
            name="signalLights"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="warningLights"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Warning Lights :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.warningLights}
            id="warningLights"
            name="warningLights"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="horn"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Horn :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.horn}
            id="horn"
            name="horn"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="windshield"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            WindShield :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.windshield}
            id="windshield"
            name="windshield"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="wipers"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Wipers :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.wipers}
            id="wipers"
            name="wipers"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="tinting"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Glass Tinting :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.tinting}
            id="tinting"
            name="tinting"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="mirrors"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Mirrors :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.mirrors}
            id="mirrors"
            name="mirrors"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="doors"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Doors :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.doors}
            id="doors"
            name="doors"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="tires"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Tires :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.tires}
            id="tires"
            name="tires"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="nuts"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Nuts :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.nuts}
            id="nuts"
            name="nuts"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="dashboardLights"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Dashboard Lights :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.dashboardLights}
            id="dashboardLights"
            name="dashboardLights"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="tailLights"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Tail Lights :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.tailLights}
            id="tailLights"
            name="tailLights"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="reverseLights"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Reverse Lights :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.reverseLights}
            id="reverseLights"
            name="reverseLights"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="rearPlateLight"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Rear Plate Light :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.rearPlateLight}
            id="rearPlateLight"
            name="rearPlateLight"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="turnSignalLights"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Turn Signal Lights :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.turnSignalLights}
            id="turnSignalLights"
            name="turnSignalLights"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="brakeLights"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Brake Lights :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.brakeLights}
            id="brakeLights"
            name="brakeLights"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="saftyBelts"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Safty Belts :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.saftyBelts}
            id="saftyBelts"
            name="saftyBelts"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="vehicleBody"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Vehicle Body :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.vehicleBody}
            id="vehicleBody"
            name="vehicleBody"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="fireExtinguisher"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Fire Extinguisher :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.fireExtinguisher}
            id="fireExtinguisher"
            name="fireExtinguisher"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="warningTriangle"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Warning Triangle :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.warningTriangle}
            id="warningTriangle"
            name="warningTriangle"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="spareTire"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Spare Tire :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.spareTire}
            id="spareTire"
            name="spareTire"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="rustCorrosion"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Rust And Corrosion :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.rustCorrosion}
            id="rustCorrosion"
            name="rustCorrosion"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="sunVisors"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Sun Visors :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.sunVisors}
            id="sunVisors"
            name="sunVisors"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="ballJoints"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Ball Joints :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.ballJoints}
            id="ballJoints"
            name="ballJoints"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="mountingBase"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Mounting Base :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.mountingBase}
            id="mountingBase"
            name="mountingBase"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="steeringCircuit"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Steering Circuit :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.steeringCircuit}
            id="steeringCircuit"
            name="steeringCircuit"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="steeringRods"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Steering Rods :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.steeringRods}
            id="steeringRods"
            name="steeringRods"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="hosesPipes"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Hoses and Pipes :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.hosesPipes}
            id="hosesPipes"
            name="hosesPipes"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="brakeDiscs"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Brake Discs :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.brakeDiscs}
            id="brakeDiscs"
            name="brakeDiscs"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="brakeCylinders"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Brake Cylinders :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.brakeCylinders}
            id="brakeCylinders"
            name="brakeCylinders"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="fittings"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Fittings :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.fittings}
            id="fittings"
            name="fittings"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="stabilizerBar"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Stabilizer Bar :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.stabilizerBar}
            id="stabilizerBar"
            name="stabilizerBar"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="frontSuspension"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Front Suspension :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.frontSuspension}
            id="frontSuspension"
            name="frontSuspension"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="rearSuspension"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Rear Suspension :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.rearSuspension}
            id="rearSuspension"
            name="rearSuspension"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="frontSprings"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Front Springs :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.frontSprings}
            id="frontSprings"
            name="frontSprings"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="rearSprings"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Rear Springs :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.rearSprings}
            id="rearSprings"
            name="rearSprings"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="shockAbsorbers"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Shock Absorbers :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.shockAbsorbers}
            id="shockAbsorbers"
            name="shockAbsorbers"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="engineMountings"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Engine Mountings :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.engineMountings}
            id="engineMountings"
            name="engineMountings"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="gearMountings"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Gear Mountings :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.gearMountings}
            id="gearMountings"
            name="gearMountings"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="transimissionParts"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Transimission Parts :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.transimissionParts}
            id="transimissionParts"
            name="transimissionParts"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="mufflers"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Mufflers :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.mufflers}
            id="mufflers"
            name="mufflers"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="fuelTank"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Fuel Tank :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.fuelTank}
            id="fuelTank"
            name="fuelTank"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="speedometerCable"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Speedometer Cable :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.speedometerCable}
            id="speedometerCable"
            name="speedometerCable"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="chassis"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Chassis and Crossbars :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.chassis}
            id="chassis"
            name="chassis"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="floorRust"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Rust and corrosion floor pan :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.floorRust}
            id="floorRust"
            name="floorRust"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label
            htmlFor="oilLeaks"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Oil leakage under the vehicle :
          </label>
          <select
            onChange={handleChange}
            value={visualInspection.oilLeaks}
            id="oilLeaks"
            name="oilLeaks"
            className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>Pass</option>
            <option value={0}>Fail</option>
          </select>
        </div>
        <div className="col-span-6 my-8 flex flex-col-reverse gap-2 md:flex-row md:justify-end ">
          <button
            onClick={() => router.push(`/vehicles/${id}/result`)}
            type="button"
            className="inline-flex w-full items-center justify-center rounded-lg bg-red-700 px-10 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 md:w-auto"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-lg bg-blue-700 px-10 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:w-auto"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default VisualInspectionForm;
