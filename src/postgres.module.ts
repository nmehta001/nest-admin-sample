import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import AdminUser from 'nestjs-admin/dist/src/adminUser/adminUser.entity';
import { UserEntity } from '../libs/user/src/schemas/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      // eslint-disable-next-line no-unused-vars
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: '',
        password: '',
        database: 'test_db',
        ssl: false,
        entities: [AdminUser, UserEntity],
        synchronize: true,
      }),
    }),
  ],
})
export class PostgresModule {}
