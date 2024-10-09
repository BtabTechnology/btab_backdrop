"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVendorTable = void 0;
class CreateVendorTable {
    name = "CreateVendorTable1651234567890";
    async up(queryRunner) {
        await queryRunner.query(`
      CREATE TABLE "vendor" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "name" character varying NOT NULL,
        "description" character varying,
        "contact_email" character varying,
        "website" character varying,
        "created_at" TIMESTAMP NOT NULL DEFAULT now(),
        "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
        PRIMARY KEY ("id")
      )
    `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "vendor"`);
    }
}
exports.CreateVendorTable = CreateVendorTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTY1MTIzNDU2Nzg5MC1DcmVhdGVWZW5kb3JUYWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWdyYXRpb25zLzE2NTEyMzQ1Njc4OTAtQ3JlYXRlVmVuZG9yVGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsTUFBYSxpQkFBaUI7SUFDNUIsSUFBSSxHQUFHLGdDQUFnQyxDQUFBO0lBRWhDLEtBQUssQ0FBQyxFQUFFLENBQUMsV0FBd0I7UUFDdEMsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUFDOzs7Ozs7Ozs7OztLQVd2QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUksQ0FBQyxXQUF3QjtRQUN4QyxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBQ0Y7QUFyQkQsOENBcUJDIn0=