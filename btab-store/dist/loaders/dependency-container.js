"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const awilix_1 = require("awilix");
const vendor_1 = require("../repositories/vendor");
const vendor_2 = __importDefault(require("../services/vendor"));
function default_1({ container }) {
    container.register({
        vendorRepository: (0, awilix_1.asClass)(vendor_1.VendorRepository).singleton(),
        vendorService: (0, awilix_1.asClass)(vendor_2.default).singleton(),
    });
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS1jb250YWluZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbG9hZGVycy9kZXBlbmRlbmN5LWNvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUFpQztBQUNqQyxtREFBMEQ7QUFDMUQsZ0VBQStDO0FBRS9DLG1CQUF5QixFQUFFLFNBQVMsRUFBRTtJQUNwQyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBQ2pCLGdCQUFnQixFQUFFLElBQUEsZ0JBQU8sRUFBQyx5QkFBZ0IsQ0FBQyxDQUFDLFNBQVMsRUFBRTtRQUN2RCxhQUFhLEVBQUUsSUFBQSxnQkFBTyxFQUFDLGdCQUFhLENBQUMsQ0FBQyxTQUFTLEVBQUU7S0FDbEQsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUxELDRCQUtDIn0=