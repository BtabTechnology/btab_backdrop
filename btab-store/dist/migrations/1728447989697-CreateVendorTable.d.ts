import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateVendorTable1728447989697 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
