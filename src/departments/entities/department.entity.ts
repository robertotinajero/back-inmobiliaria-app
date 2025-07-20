import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, HasMany } from 'sequelize-typescript';
import { User } from '../../users/user.model';

@Table({ tableName: 'tbl_departments', timestamps: false })
export class Department extends Model<Department> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id_department: number;

  @Column({ type: DataType.STRING(100), allowNull: false })
  nm_department: string;

  @HasMany(() => User)
  users: User[];
}
