import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from 'typeorm';
import { User } from '../users/user.entity';

@Entity('tbl_roles')
export class Role {
  @PrimaryGeneratedColumn({ name: 'id_role' })
  id: number;

  @Column({ name: 'nm_role' })
  name: string;

  @Column({ default: 1 })
  fg_active: number;

  @Column({ nullable: true })
  id_user_last_modification: string;

  @CreateDateColumn({ name: 'dt_timestamp' })
  timestamp: Date;

  @OneToMany(() => User, (user) => user.role)
  users: User[];
}
