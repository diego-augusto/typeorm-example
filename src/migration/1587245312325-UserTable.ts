import {MigrationInterface, QueryRunner} from "typeorm";

export class UserTable1587245312325 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        const query = `
            CREATE TABLE "user" (
                id          SERIAL PRIMARY KEY,
                name        VARCHAR(255) NOT NULL,
                email       VARCHAR(100) UNIQUE NOT NULL,
                actived     BOOLEAN NOT NULL
            );
        `

        await queryRunner.query(query)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "user";`)
    }
}
