import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, HasMany } from 'sequelize-typescript';
import { User } from '../../users/user.model';

@Table({ tableName: 'tbl_roles', timestamps: false })
export class Role extends Model<Role> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id_role: number;

  @Column({ type: DataType.STRING(100), allowNull: false })
  nm_role: string;

  @HasMany(() => User)
  users: User[];
}
