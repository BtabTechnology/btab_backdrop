"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const medusa_core_utils_1 = require("medusa-core-utils");
const medusa_1 = require("@medusajs/medusa");
class VendorService extends medusa_1.TransactionBaseService {
    vendorRepository_;
    constructor({ vendorRepository, }) {
        super(arguments[0]);
        this.vendorRepository_ = vendorRepository;
    }
    async create(input) {
        const vendor = this.vendorRepository_.create(input);
        return await this.vendorRepository_.save(vendor);
    }
    async list() {
        return await this.vendorRepository_.find();
    }
    async retrieve(vendorId) {
        const vendor = await this.vendorRepository_.findOne({ where: { id: vendorId } });
        if (!vendor) {
            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, `Vendor with id: ${vendorId} was not found`);
        }
        return vendor;
    }
    async update(vendorId, updateData) {
        await this.vendorRepository_.update(vendorId, updateData);
        return await this.retrieve(vendorId);
    }
    async delete(vendorId) {
        await this.vendorRepository_.delete(vendorId);
    }
}
exports.default = VendorService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2VzL3ZlbmRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHlEQUFnRDtBQUNoRCw2Q0FBeUQ7QUFXekQsTUFBTSxhQUFjLFNBQVEsK0JBQXNCO0lBQ3hDLGlCQUFpQixDQUFtQjtJQUU1QyxZQUFZLEVBQ1YsZ0JBQWdCLEdBSWpCO1FBQ0MsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQztJQUM1QyxDQUFDO0lBRUQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUF3QjtRQUNuQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BELE9BQU8sTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxLQUFLLENBQUMsSUFBSTtRQUNSLE9BQU8sTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVELEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBZ0I7UUFDN0IsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsTUFBTSxJQUFJLCtCQUFXLENBQ25CLCtCQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFDM0IsbUJBQW1CLFFBQVEsZ0JBQWdCLENBQzVDLENBQUM7U0FDSDtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQWdCLEVBQUUsVUFBc0M7UUFDbkUsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUMxRCxPQUFPLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFnQjtRQUMzQixNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEQsQ0FBQztDQUNGO0FBRUQsa0JBQWUsYUFBYSxDQUFDIn0=