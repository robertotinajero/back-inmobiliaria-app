import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Role } from '../roles/role.model';
import { Department } from '../departments/department.model';

@Table({
  tableName: 'tbl_users',
  timestamps: false,
})
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id_user: number;

  @Column(DataType.STRING(100))
  firstname: string;

  @Column(DataType.STRING(100))
  lastname: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    unique: true,
  })
  username: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  password: string;

  @Column(DataType.STRING(15))
  phone: string;

  @Column(DataType.STRING(255))
  token: string;

  @Column(DataType.STRING(255))
  profile_image_url: string;

  @ForeignKey(() => Role)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id_role: number;

  @BelongsTo(() => Role)
  role: Role;

  @ForeignKey(() => Department)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id_department: number;

  @BelongsTo(() => Department)
  department: Department;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 1,
  })
  fg_active: number;

  @Column(DataType.STRING)
  id_user_last_modification: string;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  dt_timestamp: Date;
}
