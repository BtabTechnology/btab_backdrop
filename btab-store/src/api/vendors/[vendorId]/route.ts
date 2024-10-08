import type { MedusaRequest, MedusaResponse } from "@medusajs/medusa";

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const { vendorId } = req.params;
  const vendorService = req.scope.resolve("vendorService");
  const vendor = await vendorService.getVendorById(vendorId); // Assume `getVendorById` is defined in your vendor service

  if (!vendor) {
    return res.status(404).json({ message: "Vendor not found" });
  }

  res.json({ vendor });
}

export async function PUT(req: MedusaRequest, res: MedusaResponse) {
  const { vendorId } = req.params;
  const vendorService = req.scope.resolve("vendorService");
  const updatedVendor = await vendorService.updateVendor(vendorId, req.body); // Assume `updateVendor` is defined in your vendor service

  res.json({ vendor: updatedVendor });
}

export async function DELETE(req: MedusaRequest, res: MedusaResponse) {
  const { vendorId } = req.params;
  const vendorService = req.scope.resolve("vendorService");
  await vendorService.deleteVendor(vendorId); // Assume `deleteVendor` is defined in your vendor service

  res.status(204).send();
}
