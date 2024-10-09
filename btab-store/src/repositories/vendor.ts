import { EntityRepository, Repository } from "typeorm";
import { Vendor } from "../models/vendor";

@EntityRepository(Vendor)
export class VendorRepository extends Repository<Vendor> {
  // You can add custom methods here if needed
}
