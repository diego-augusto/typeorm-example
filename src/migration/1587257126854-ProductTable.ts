import {MigrationInterface, QueryRunner} from "typeorm";

export class ProductTable1587257126854 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        
        const query = `
            CREATE TABLE product (
                id          SERIAL PRIMARY KEY,
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
