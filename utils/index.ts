import { testLimits } from "../data";
import QRCode from "qrcode";

export function addLeadingZeros(num: number, totalLength: number) {
  return String(num).padStart(totalLength, "0");
}

export const getVisualInspectionResult = (visualInspection) => {
  let count = 0;
  if (visualInspection) {
    Object?.keys(visualInspection).forEach((key) => {
      if (
        visualInspection[key] === 1 &&
        !["id", "vehicleId", "vehicle", "createdAt", "result"].includes(key)
      ) {
        count++;
      }
    });
    if (count === 60) return true;
    return false;
  }
};

export const getEmmissionResult = (emission, isDiesel) => {
  if (emission) {
    if (isDiesel) {
      return emission.diesel <= testLimits.diesel ? true : false;
    }

    if (!isDiesel) {
      return emission.co <= testLimits.co && emission.hc <= testLimits.hc
        ? true
        : false;
    }
  }
};

export const getHighBeamResult = (highBeamLevel) => {
  if (highBeamLevel.right && highBeamLevel.left) {
    return highBeamLevel.left <= testLimits.highBeam &&
      highBeamLevel.right <= testLimits.highBeam
      ? true
      : false;
  }
  return;
};

export const getSideSlipResult = (sideSlip) => {
  if (sideSlip.reading) {
    return sideSlip.reading <= testLimits.sideSlip ? true : false;
  }
  return;
};

export const getSuspensionResult = (suspension) => {
  const { fr, fl, rr, rl } = suspension;
  if (fr && fl && rr && rl) {
    return fr <= testLimits.suspension &&
      fl <= testLimits.suspension &&
      rr <= testLimits.suspension &&
      rl <= testLimits.suspension
      ? true
      : false;
  }
  return;
};

export const getBrakeTestResult = (brakeTest) => {
  if (brakeTest.front && brakeTest.rear && brakeTest.parking) {
    return brakeTest.front <= testLimits.serviceBrake &&
      brakeTest.rear <= testLimits.serviceBrake &&
      brakeTest.parking <= testLimits.parkingBrake
      ? true
      : false;
  }
  return;
};

export const getFinalResult = (vehicle) => {
  const tests = [
    vehicle.visualInspection,
    vehicle.emissionTest,
    vehicle.highBeamLevel,
    vehicle.sideSlip,
    vehicle.suspensionTest,
    vehicle.brakeTest,
  ];

  return tests.every((test) => test?.result === true);
};

export const completeTests = (vehicle) => {
  const tests = [
    vehicle.visualInspection,
    vehicle.emissionTest,
    vehicle.highBeamLevel,
    vehicle.sideSlip,
    vehicle.suspensionTest,
    vehicle.brakeTest,
  ];

  return tests.every((test) => !!test);
};
