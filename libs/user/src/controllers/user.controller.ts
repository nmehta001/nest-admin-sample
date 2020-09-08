import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserMethodsInterface } from '../types';
import { UserEntity } from '../schemas/user.entity';
import { UserCreateDto } from '../dto/user.create.dto';

@Controller('user')
export class UserController implements UserMethodsInterface {
  public constructor(private userService: UserService) {}

  @Get()
  public getUsers(): Promise<Array<UserEntity>> {
    return this.userService.getUsers();
  }

  @Get('/:id')
  public getUser(@Param('id') id: string): Promise<UserEntity> {
    return this.userService.getUser(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  public createUser(@Body() userCreateDto: UserCreateDto): Promise<UserEntity> {
    return this.userService.createUser(userCreateDto);
  }

  @Delete('/:id')
  public async deleteUser(@Param('id') id: string): Promise<void> {
    return await this.userService.deleteUser(id);
  }

  @Patch(':id/status')
  public async updateUser(
    @Param('id') id: string,
    @Body('phoneNumber') phoneNumber: string,
  ): Promise<UserEntity> {
    return await this.userService.updateUser(id, phoneNumber);
  }
}
