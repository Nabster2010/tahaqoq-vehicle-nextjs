import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  if (!session || session.user.role === "GUEST") {
    return res
      .status(401)
      .json({ message: "Not authenticated or not Authorized" });
  }
  if (req.method === "GET") {
    try {
      let page = req.query.page ? parseInt(req.query.page as string) : 1;
      let size = req.query.size ? parseInt(req.query.size as string) : 5;
      if (size > 10) size = 10;
      const sideSlipResults = await prisma.sideSlip.findMany({
        skip: (page - 1) * size,
        take: size,
      });
      const totalCount = await prisma.sideSlip.count();
      res.status(200).json({ sideSlipResults, page, size, totalCount });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }
  } else if (req.method === "POST") {
    try {
      const sideSlipResult = await prisma.sideSlip.create({
        data: {
          ...req.body,
        },
      });
      res.status(200).json(sideSlipResult);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
