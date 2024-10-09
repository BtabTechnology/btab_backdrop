"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVendorTable1728447989697 = void 0;
class CreateVendorTable1728447989697 {
    name = 'CreateVendorTable1728447989697';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "vendor" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "contact_email" character varying, "website" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_931a23f6231a57604f5a0e32780" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "vendor"`);
    }
}
exports.CreateVendorTable1728447989697 = CreateVendorTable1728447989697;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcyODQ0Nzk4OTY5Ny1DcmVhdGVWZW5kb3JUYWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWdyYXRpb25zLzE3Mjg0NDc5ODk2OTctQ3JlYXRlVmVuZG9yVGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsTUFBYSw4QkFBOEI7SUFDdkMsSUFBSSxHQUFHLGdDQUFnQyxDQUFBO0lBRWhDLEtBQUssQ0FBQyxFQUFFLENBQUMsV0FBd0I7UUFDcEMsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLGtYQUFrWCxDQUFDLENBQUM7SUFDaFosQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBd0I7UUFDdEMsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDbkQsQ0FBQztDQUVKO0FBWEQsd0VBV0MifQ==