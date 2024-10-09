import { EntityManager } from "typeorm";
import { TransactionBaseService } from "@medusajs/medusa";
import { VendorRepository } from "../repositories/vendor";
import { Vendor } from "../models/vendor";
interface CreateVendorInput {
    name: string;
    description: string;
    contact_email?: string;
    website?: string;
}
declare class VendorService extends TransactionBaseService {
    private vendorRepository_;
    constructor({ vendorRepository, }: {
        manager: EntityManager;
        vendorRepository: VendorRepository;
    });
    create(input: CreateVendorInput): Promise<Vendor>;
    list(): Promise<Vendor[]>;
    retrieve(vendorId: string): Promise<Vendor>;
    update(vendorId: string, updateData: Partial<CreateVendorInput>): Promise<Vendor>;
    delete(vendorId: string): Promise<void>;
}
export default VendorService;
