import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1700124439071 implements MigrationInterface {
    name = 'MyMigration1700124439071'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`products\` (\`id\` int NOT NULL AUTO_INCREMENT, \`prdnm\` varchar(255) NOT NULL, \`harga\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`transactions\` (\`id\` int NOT NULL AUTO_INCREMENT, \`invoice_number\` varchar(255) NOT NULL, \`invoice_date\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`customer\` varchar(255) NOT NULL, \`qty\` int NOT NULL, \`total_amount\` varchar(255) NOT NULL, \`total_count\` int NOT NULL, \`product_detail\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`transactions\``);
        await queryRunner.query(`DROP TABLE \`products\``);
    }

}
