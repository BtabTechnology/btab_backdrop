import { Request, Response } from "express";
import VendorService from "../../services/vendor";
export default class VendorController {
    private vendorService;
    constructor({ vendorService }: {
        vendorService: VendorService;
    });
    createVendor(req: Request, res: Response): Promise<void>;
    getVendors(req: Request, res: Response): Promise<void>;
    getVendor(req: Request, res: Response): Promise<void>;
    updateVendor(req: Request, res: Response): Promise<void>;
    deleteVendor(req: Request, res: Response): Promise<void>;
}
