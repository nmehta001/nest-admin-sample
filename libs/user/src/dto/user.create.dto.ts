import { UserInterface } from '../types';
import { IsDefined, IsString } from 'class-validator';

export class UserCreateDto implements UserInterface {
  @IsDefined({
    message: 'firstName is required',
  })
  @IsString({
    message: 'firstName expected as string',
  })
  public firstName: string;

  @IsDefined({
    message: 'lastName is required',
  })
  @IsString({
    message: 'lastName expected as string',
  })
  public lastName: string;

  @IsDefined({
    message: 'phoneNumber is required',
  })
  @IsString({
    message: 'phoneNumber expected as string',
  })
  public phoneNumber: string;
}
