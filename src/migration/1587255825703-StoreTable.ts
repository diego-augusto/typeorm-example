import { MigrationInterface, QueryRunner } from "typeorm";

export class StoreTable1587255825703 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        
        const query = `
            CREATE TABLE store (
                id          SERIAL PRIMARY KEY,
                "publicId"  UUID NOT NULL DEFAULT uuid_generate_v4(),
                "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
                "updatedAt" TIMESTAMPTZ,
                "deletedAt" TIMESTAMPTZ,
                name        VARCHAR(255) UNIQUE NOT NULL,
                "userId"    INTEGER REFERENCES "user"(id) NOT NULL
            );
        `
        await queryRunner.query(query)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE store;`)
    }
}
