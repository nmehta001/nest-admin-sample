import {
  Entity,
  Column,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  BaseEntity,
} from 'typeorm';
import { IsDefined, IsString } from 'class-validator';
import { UserInterface } from '../types';

@Entity()
export class UserEntity extends BaseEntity implements UserInterface {
  public constructor(init?: Partial<UserEntity>) {
    super();
    Object.assign(this, init);
  }

  @PrimaryGeneratedColumn('uuid')
  @Column('uuid')
  @PrimaryColumn()
  public id: string;

  @IsDefined({
    message: 'firstName is required',
  })
  @IsString({
    message: 'firstName expected as string',
  })
  @Column('varchar')
  public firstName: string;

  @IsDefined({
    message: 'lastName is required',
  })
  @IsString({
    message: 'lastName expected as string',
  })
  @Column('varchar')
  public lastName: string;

  @IsDefined({
    message: 'phoneNumber is required',
  })
  @IsString({
    message: 'phoneNumber expected as string',
  })
  @Column('varchar')
  public phoneNumber: string;
}
