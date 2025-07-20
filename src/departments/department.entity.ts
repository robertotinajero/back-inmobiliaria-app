import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany
} from 'typeorm';
import { User } from '../users/user.entity';

@Entity('tbl_departments')
export class Department {
  @PrimaryGeneratedColumn({ name: 'id_department' })
  id: number;

  @Column()
  nm_department: string;

  @Column({ default: 1 })
  fg_active: number;

  @Column({ nullable: true })
  id_user_last_modification: string;

  @CreateDateColumn({ name: 'dt_timestamp' })
  timestamp: Date;

  @OneToMany(() => User, (user) => user.department)
  users: User[];
}
