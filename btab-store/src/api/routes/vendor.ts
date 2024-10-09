import { Router, Request, Response } from "express";
import VendorController from "../controllers/vendor-controller";
import VendorService from "../../services/vendor";
import { EntityManager } from "typeorm";
import { VendorRepository } from "../../repositories/vendor";

const router: Router = Router();

// Provide mock instances for manager and vendorRepository
const mockManager = {} as EntityManager;
const mockVendorRepository = {} as VendorRepository;

const vendorService = new VendorService({ manager: mockManager, vendorRepository: mockVendorRepository });
const vendorController = new VendorController({ vendorService });

router.post("/vendors", (req: Request, res: Response) => vendorController.createVendor(req, res));
router.get("/vendors", (req: Request, res: Response) => vendorController.getVendors(req, res));
router.get("/vendors/:id", (req: Request, res: Response) => vendorController.getVendor(req, res));
router.put("/vendors/:id", (req: Request, res: Response) => vendorController.updateVendor(req, res));
router.delete("/vendors/:id", (req: Request, res: Response) => vendorController.deleteVendor(req, res));

export default router;
