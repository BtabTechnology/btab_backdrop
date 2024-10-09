import { EntityManager } from "typeorm";
import { MedusaError } from "medusa-core-utils";
import { TransactionBaseService } from "@medusajs/medusa"
import { VendorRepository } from "../repositories/vendor";
import { Vendor } from "../models/vendor";

interface CreateVendorInput {
  name: string;
  description: string;
  contact_email?: string;
  website?: string;
}

class VendorService extends TransactionBaseService {
  private vendorRepository_: VendorRepository;

  constructor({
    vendorRepository,
  }: {
    manager: EntityManager;
    vendorRepository: VendorRepository;
  }) {
    super(arguments[0]);
    this.vendorRepository_ = vendorRepository;
  }

  async create(input: CreateVendorInput): Promise<Vendor> {
    const vendor = this.vendorRepository_.create(input);
    return await this.vendorRepository_.save(vendor);
  }

  async list(): Promise<Vendor[]> {
    return await this.vendorRepository_.find(); 
  }

  async retrieve(vendorId: string): Promise<Vendor> {
    const vendor = await this.vendorRepository_.findOne({ where: { id: vendorId } });
    if (!vendor) {
      throw new MedusaError(
        MedusaError.Types.NOT_FOUND,
        `Vendor with id: ${vendorId} was not found`
      );
    }
    return vendor;
  }

  async update(vendorId: string, updateData: Partial<CreateVendorInput>): Promise<Vendor> {
    await this.vendorRepository_.update(vendorId, updateData);
    return await this.retrieve(vendorId);
  }

  async delete(vendorId: string): Promise<void> {
    await this.vendorRepository_.delete(vendorId);
  }
}

export default VendorService; 