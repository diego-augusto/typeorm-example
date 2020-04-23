import { MigrationInterface, QueryRunner } from "typeorm";

export class UserTable1587245312325 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        const uuidExtension = `CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`

        await queryRunner.query(uuidExtension)

        const query = `
            CREATE TABLE "user" (
                id          SERIAL PRIMARY KEY,
                "publicId"  UUID NOT NULL DEFAULT uuid_generate_v4(),
                "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
                "updatedAt" TIMESTAMPTZ,
                "deletedAt" TIMESTAMPTZ,
                name        VARCHAR(255) NOT NULL,
                email       VARCHAR(100) UNIQUE NOT NULL,
                password    VARCHAR(255) UNIQUE NOT NULL
            );
        `

        await queryRunner.query(query)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "user";`)
    }
}
