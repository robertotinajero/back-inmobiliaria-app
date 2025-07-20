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
    tableName: 'tbl_roles',
    timestamps: false,
})
export class Role extends Model<Role> {
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    id_role: number;

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
        unique: true,
    })
    nm_role: string;

    @HasMany(() => User)
    users: User[];
}
