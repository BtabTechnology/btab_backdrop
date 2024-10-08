import type { MedusaRequest, MedusaResponse } from "@medusajs/medusa";

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const vendorService = req.scope.resolve("vendorService");
  const vendors = await vendorService.listVendors(); // Assume `listVendors` is defined in your vendor service
  res.json({ vendors });
}

export async function POST(req: MedusaRequest, res: MedusaResponse) {
  const vendorService = req.scope.resolve("vendorService");
  const newVendor = await vendorService.createVendor(req.body);
  res.status(201).json({ vendor: newVendor });
}
