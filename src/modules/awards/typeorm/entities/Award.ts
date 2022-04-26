import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_award')
class Award {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  origin: string;

  @Column('tinyint')
  national: boolean;
}

export default Award;
