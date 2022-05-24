import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateThophy1653351688340 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE IF NOT EXISTS tb_trophy
                            (id int NOT NULL AUTO_INCREMENT,
                            name varchar(100) NOT NULL COMMENT 'Name of Trophy',
                            origin varchar(50) DEFAULT NULL COMMENT 'Country or origin of the award  / exemple: Brasil, Europa, America',
                            organization varchar(50) DEFAULT NULL COMMENT 'organization of award / exemple: CBF, UEFA, FIFA, CONMEBOL...',
                            national tinyint(1) DEFAULT '0' COMMENT 'This award is national / 0 false, 1 true',
                            PRIMARY KEY (id),
                            UNIQUE KEY id_UNIQUE (id)
                            ) COMMENT='Collective Trophy'`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE tb_trophy`);
  }
}
