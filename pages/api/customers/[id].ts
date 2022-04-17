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
  const { id } = req.query;
  if (req.method === "GET") {
    try {
      const customer = await prisma.customer.findUnique({
        where: { id: Number(id) },
      });
      if (!customer) {
        return res.status(404).json({ message: "Customer not found" });
      }
      res.status(200).json(customer);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    // Process a Get request
  } else if (req.method === "PUT") {
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
      const customer = await prisma.customer.findUnique({
        where: { id: Number(id) },
      });
      if (!customer) {
        return res.status(404).json({ message: "Customer not found" });
      }
      const updatedCustomer = await prisma.customer.update({
        where: { id: Number(id) },
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
      res.status(200).json(updatedCustomer);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    //fallback for other methods
  } else if (req.method === "DELETE") {
    try {
      const customer = await prisma.customer.findUnique({
        where: { id: Number(id) },
      });
      if (!customer) {
        return res.status(404).json({ message: "Customer not found" });
      }
      const deletedCustomer = await prisma.customer.delete({
        where: { id: Number(id) },
      });
      res.status(200).json(deletedCustomer);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    //fallback for other methods
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
