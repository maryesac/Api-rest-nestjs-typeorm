import {MigrationInterface, QueryRunner} from "typeorm";

export class init1626002980726 implements MigrationInterface {
    name = 'init1626002980726'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categoria" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, CONSTRAINT "PK_f027836b77b84fb4c3a374dc70d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "curso" ("id" SERIAL NOT NULL, "cursoID" integer NOT NULL, "nombre" character varying NOT NULL, "duracion" integer NOT NULL, "docente" character varying NOT NULL, CONSTRAINT "PK_76073a915621326fb85f28ecc5d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "task" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "usuario" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "usuario" character varying NOT NULL, "contraseña" character varying NOT NULL, CONSTRAINT "PK_a56c58e5cabaa04fb2c98d2d7e2" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "usuario"`);
        await queryRunner.query(`DROP TABLE "task"`);
        await queryRunner.query(`DROP TABLE "curso"`);
        await queryRunner.query(`DROP TABLE "categoria"`);
    }

}
