import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Role } from '../roles/role.entity';
import { Department } from '../departments/department.entity';

@Entity('tbl_users')
export class User {
  @PrimaryGeneratedColumn()
  id_user: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  phone: string;

  @Column()
  token: string;

  @Column({ nullable: true })
  profile_image_url: string;

  @Column()
  id_role: number;

  @Column()
  id_department: number;

  @Column({ default: 1 })
  fg_active: number;

  @Column({ nullable: true })
  id_user_last_modification: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dt_timestamp: Date;

  @ManyToOne(() => Role, (role) => role.users)
  @JoinColumn({ name: 'id_role' })
  role: Role;

  @ManyToOne(() => Department, (department) => department.users)
  @JoinColumn({ name: 'id_department' })
  department: Department;
  
}
