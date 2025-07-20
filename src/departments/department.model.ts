import {
    Table,
    Column,
    Model,
    DataType,
    AutoIncrement,
    HasMany,
} from 'sequelize-typescript';
import { User } from '../users/user.model';

@Table({
    tableName: 'tbl_departments',
    timestamps: false,
})
export class Department extends Model<Department> {
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    id_department: number;

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
        unique: true,
    })
    nm_department: string;

    @HasMany(() => User)
    users: User[];
}
