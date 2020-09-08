import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../repositories/user.repository';
import { UserEntity } from '../schemas/user.entity';
import { UserCreateDto } from '../dto/user.create.dto';
import { UserMethodsInterface } from '../types';

@Injectable()
export class UserService implements UserMethodsInterface {
  public constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  public async getUsers(): Promise<Array<UserEntity>> {
    return this.userRepository.getUsers();
  }

  public async getUser(id: string): Promise<UserEntity> {
    const found = this.userRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Task with id: ${id} not found`);
    }

    return found;
  }

  public async createUser(userCreateDto: UserCreateDto): Promise<UserEntity> {
    return this.userRepository.createUser(userCreateDto);
  }

  public async deleteUser(id: string): Promise<void> {
    const result = await this.userRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Task with id: ${id} not found`);
    }
  }

  public async updateUser(
    id: string,
    phoneNumber: string,
  ): Promise<UserEntity> {
    const user = await this.getUser(id);

    user.phoneNumber = phoneNumber;

    await user.save();

    return user;
  }
}
