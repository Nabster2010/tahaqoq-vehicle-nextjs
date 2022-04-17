import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: "Not authenticated" });
  }
  if (req.method === "GET") {
    try {
      let page = req.query.page ? parseInt(req.query.page as string) : 1;
      let size = req.query.size ? parseInt(req.query.size as string) : 5;
      if (size > 10) size = 10;

      const vehicles = await prisma.vehicle.findMany({
        include: {
          customer: true,
        },
        skip: (page - 1) * size,
        take: size,
      });
      const totalCount = await prisma.vehicle.count();
      const totalPages = Math.ceil(totalCount / size);
      res.status(200).json({ vehicles, meta: { page, size, totalPages } });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }
  } else if (req.method === "POST") {
    const {
      vin,
      reqNo,
      reqDate,
      bayanNo,
      bayanDate,
      port,
      paymentType,
      price,
      tax,
      customerId,
    } = req.body;
    //TODO: Validate the data
    if (
      !vin ||
      !reqNo ||
      !reqDate ||
      !bayanNo ||
      !bayanDate ||
      !port ||
      !paymentType ||
      !price ||
      !tax ||
      !customerId
    ) {
      return res
        .status(400)
        .json({ message: "Please provide all the required fields" });
    }
    try {
      const vehicle = await prisma.vehicle.create({
        data: {
          ...req.body,
        },
      });
      //create vehicle Visual inspection
      await prisma.visualInspection.create({
        data: {
          vehicleId: vehicle.id,
        },
      });
      res.status(200).json(vehicle);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
