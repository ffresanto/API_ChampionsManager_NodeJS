import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAwards1650066959096 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE IF NOT EXISTS tb_award
                            (id int NOT NULL AUTO_INCREMENT,
                            name varchar(100) NOT NULL COMMENT 'Name of Award',
                            origin varchar(50) DEFAULT NULL COMMENT 'Country or origin of the award  / exemple: Brasil, Europa, America',
                            organization varchar(50) DEFAULT NULL COMMENT 'organization of award / exemple: CBF, UEFA, FIFA, CONMEBOL...',
                            national tinyint(1) DEFAULT '0' COMMENT 'This award is national / 0 false, 1 true',
                            PRIMARY KEY (id),
                            UNIQUE KEY id_UNIQUE (id)
                            ) COMMENT='Individual Award'`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE tb_award`);
  }
}
