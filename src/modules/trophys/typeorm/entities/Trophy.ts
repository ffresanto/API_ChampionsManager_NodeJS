import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_trophy')
class Thophy {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  origin: string;

  @Column()
  organization: string;

  @Column('tinyint')
  national: boolean;
}

export default Thophy;
