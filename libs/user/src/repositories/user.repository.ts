import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from '../schemas/user.entity';
import { UserCreateDto } from '../dto/user.create.dto';
import { UserMethodsInterface } from '../types';

@Injectable()
export class UserRepository extends Repository<UserEntity>
  implements UserMethodsInterface {
  public async getUsers(): Promise<Array<UserEntity>> {
    const query = this.createQueryBuilder('user');
    return query.getMany();
  }

  getUser(id: string): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }

  public async createUser(userCreateDto: UserCreateDto): Promise<UserEntity> {
    const { firstName, lastName, phoneNumber } = userCreateDto;

    const user = new UserEntity({
      firstName,
      lastName,
      phoneNumber,
    });

    user.save();

    return user;
  }
  deleteUser(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  updateUser(id: string, phoneNumber: string): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
}
