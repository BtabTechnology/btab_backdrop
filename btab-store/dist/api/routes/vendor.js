"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vendor_controller_1 = __importDefault(require("../controllers/vendor-controller"));
const vendor_1 = __importDefault(require("../../services/vendor"));
const router = (0, express_1.Router)();
// Provide mock instances for manager and vendorRepository
const mockManager = {};
const mockVendorRepository = {};
const vendorService = new vendor_1.default({ manager: mockManager, vendorRepository: mockVendorRepository });
const vendorController = new vendor_controller_1.default({ vendorService });
router.post("/vendors", (req, res) => vendorController.createVendor(req, res));
router.get("/vendors", (req, res) => vendorController.getVendors(req, res));
router.get("/vendors/:id", (req, res) => vendorController.getVendor(req, res));
router.put("/vendors/:id", (req, res) => vendorController.updateVendor(req, res));
router.delete("/vendors/:id", (req, res) => vendorController.deleteVendor(req, res));
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwaS9yb3V0ZXMvdmVuZG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscUNBQW9EO0FBQ3BELHlGQUFnRTtBQUNoRSxtRUFBa0Q7QUFJbEQsTUFBTSxNQUFNLEdBQVcsSUFBQSxnQkFBTSxHQUFFLENBQUM7QUFFaEMsMERBQTBEO0FBQzFELE1BQU0sV0FBVyxHQUFHLEVBQW1CLENBQUM7QUFDeEMsTUFBTSxvQkFBb0IsR0FBRyxFQUFzQixDQUFDO0FBRXBELE1BQU0sYUFBYSxHQUFHLElBQUksZ0JBQWEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO0FBQzFHLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSwyQkFBZ0IsQ0FBQyxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUM7QUFFakUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDbEcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDL0YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDbEcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDckcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFFeEcsa0JBQWUsTUFBTSxDQUFDIn0=