import { Request, Response } from "express";
import VendorService from "../../services/vendor"; // Import VendorService

export default class VendorController {
  private vendorService: VendorService;

  // Expect vendorService in the constructor
  constructor({ vendorService }: { vendorService: VendorService }) {
    this.vendorService = vendorService;
  }

  async createVendor(req: Request, res: Response): Promise<void> {
    const data = req.body;
    const vendor = await this.vendorService.create(data);
    res.status(201).json({ vendor });
  }

  async getVendors(req: Request, res: Response): Promise<void> {
    const vendors = await this.vendorService.list();
    res.status(200).json({ vendors });
  }

  async getVendor(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const vendor = await this.vendorService.retrieve(id);
    res.status(200).json({ vendor });
  }

  async updateVendor(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const updateData = req.body;
    const vendor = await this.vendorService.update(id, updateData);
    res.status(200).json({ vendor });
  }

  async deleteVendor(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await this.vendorService.delete(id);
    res.status(204).end();
  }
}
