import {MigrationInterface, QueryRunner} from "typeorm";

export class ProductTable1587257126854 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        
        const query = `
            CREATE TABLE product (
                id          SERIAL PRIMARY KEY,
                "publicId"  UUID NOT NULL DEFAULT uuid_generate_v4(),
                "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
                "updatedAt" TIMESTAMPTZ,
                "deletedAt" TIMESTAMPTZ,
                name        VARCHAR(255) UNIQUE NOT NULL,
                quantity    INTEGER NOT NULL,
                "storeId"   INTEGER REFERENCES store(id) NOT NULL
            );
        `

        await queryRunner.query(query)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE product;`)
    }
}
