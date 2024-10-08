import { TransactionBaseService } from "@medusajs/medusa";
import { EntityManager } from "typeorm";
import { VendorRepository } from "../repositories/vendor";

interface VendorData {
  name: string;
  description?: string;
  contact_email?: string;
  phone_number?: string;
  website_url?: string;
}

class VendorService extends TransactionBaseService {
  protected manager_: EntityManager;
  protected vendorRepository_: VendorRepository;

  constructor(
    { manager, vendorRepository }: { manager: EntityManager; vendorRepository: VendorRepository },
    container: any,
    configModule: Record<string, unknown>
  ) {
    super(container, configModule);
    this.manager_ = manager;
    this.vendorRepository_ = vendorRepository;
  }

  // Method to create a new vendor
  async createVendor(vendorData: VendorData) {
    return await this.atomicPhase_(async (manager: EntityManager) => {
      const vendorRepo = manager.getCustomRepository(VendorRepository);
      const newVendor = vendorRepo.create(vendorData);
      return await vendorRepo.save(newVendor);
    });
  }

  // Method to list all vendors
  async listVendors() {
    return await this.atomicPhase_(async (manager: EntityManager) => {
      const vendorRepo = manager.getCustomRepository(VendorRepository);
      return await vendorRepo.find();
    });
  }

  // Method to retrieve a vendor by ID
  async getVendorById(vendorId: string) {
    return await this.atomicPhase_(async (manager: EntityManager) => {
      const vendorRepo = manager.getCustomRepository(VendorRepository);
      return await vendorRepo.findOne({ where: { id: vendorId } });
    });
  }

  // Additional functions like updateVendor and deleteVendor can go here.
}

export default VendorService;
