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
      const page = req.query.page && Number(req.query?.page);
      const size = req.query.size && Number(req.query.size);

      if (page && size) {
        const customers = await prisma.customer.findMany({
          skip: (page - 1) * size,
          take: size,
        });
        const totalCount = await prisma.customer.count();
        const totalPages = Math.ceil(totalCount / size);
        res.status(200).json({ customers, meta: { page, size, totalPages } });
      } else {
        const customers = await prisma.customer.findMany();

        res.status(200).json({
          customers,
          meta: { page: 1, size: customers.length, totalPages: 1 },
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    // Process a Get request
  } else if (req.method === "POST") {
    const { name, email, phone, address, website, taxId, customerType } =
      req.body;
    //TODO: Validate the data
    if (
      !name ||
      !email ||
      !phone ||
      !address ||
      !website ||
      !taxId ||
      !customerType
    ) {
      return res
        .status(400)
        .json({ message: "Please provide all the required fields" });
    }
    try {
      const customer = await prisma.customer.create({
        data: {
          name,
          email,
          phone,
          address,
          website,
          taxId,
          customerType,
        },
      });
      res.status(200).json(customer);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    //fallback for other methods
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
