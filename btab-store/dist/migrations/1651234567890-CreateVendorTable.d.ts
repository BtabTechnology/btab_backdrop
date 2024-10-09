import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateVendorTable implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
