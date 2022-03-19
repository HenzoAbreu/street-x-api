import {MigrationInterface, QueryRunner} from "typeorm";

export class AddressCreate1647473992958 implements MigrationInterface {
    name = 'AddressCreate1647473992958'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`address\` (\`id\` varchar(36) NOT NULL, \`zip_code\` varchar(255) NOT NULL, \`city\` varchar(255) NOT NULL, \`state\` varchar(255) NOT NULL, \`neighborhood\` varchar(255) NOT NULL, \`street\` varchar(255) NOT NULL, INDEX \`IDX_6c538d71d7e40e2da86a9ded9b\` (\`zip_code\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_6c538d71d7e40e2da86a9ded9b\` ON \`address\``);
        await queryRunner.query(`DROP TABLE \`address\``);
    }

}
