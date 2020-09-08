import { Module } from '@nestjs/common';
import { PostgresModule } from './postgres.module';
import { DefaultAdminModule } from 'nestjs-admin';
import { UserModule } from '@app/user';

@Module({
  imports: [PostgresModule, UserModule, DefaultAdminModule],
})
export class AppModule {}
