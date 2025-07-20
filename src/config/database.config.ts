import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { Role } from '../roles/role.entity';
import { Department } from '../departments/department.entity';

export const databaseConfig = async (configService: ConfigService,): Promise<TypeOrmModuleOptions> => ({
  name: 'default', // ✅ Esto previene el uso de crypto.randomUUID()
  type: 'mysql' as const,
  host: configService.get<string>('DB_HOST'),
  port: configService.get<number>('DB_PORT'),
  username: configService.get<string>('DB_USERNAME'),
  password: configService.get<string>('DB_PASSWORD'),
  database: configService.get<string>('DB_NAME'),
  autoLoadEntities: true,
  synchronize: configService.get<string>('NODE_ENV') !== 'production',
  logging: configService.get<string>('NODE_ENV') !== 'production',
  entities: [User, Role, Department]
});
