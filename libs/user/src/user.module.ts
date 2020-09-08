import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './schemas/user.entity';
import { DefaultAdminModule, DefaultAdminSite } from 'nestjs-admin';
import { UserRepository } from './repositories/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), DefaultAdminModule],
  providers: [UserRepository, UserService],
  exports: [UserService],
})
export class UserModule {
  public constructor(adminSite: DefaultAdminSite) {
    adminSite.register('User', UserEntity);
  }
}
