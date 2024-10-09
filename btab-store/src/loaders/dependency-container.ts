import { asClass } from "awilix";
import { VendorRepository } from "../repositories/vendor";
import VendorService from "../services/vendor";

export default function ({ container }) {
  container.register({
    vendorRepository: asClass(VendorRepository).singleton(),
    vendorService: asClass(VendorService).singleton(),
  });
}
