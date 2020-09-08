import { UserEntity } from './schemas/user.entity';
import { UserCreateDto } from './dto/user.create.dto';
export interface UserInterface {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export interface UserMethodsInterface {
  getUsers(): Promise<Array<UserEntity>>;
  getUser(id: string): Promise<UserEntity>;
  createUser(userCreateDto: UserCreateDto): Promise<UserEntity>;
  deleteUser(id: string): Promise<void>;
  updateUser(id: string, phoneNumber: string): Promise<UserEntity>;
}
