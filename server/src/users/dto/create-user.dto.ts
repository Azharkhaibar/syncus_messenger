import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumber,
  IsEnum,
} from 'class-validator';
import { countryEnum, genderEnum } from '../interface/users.interface'; // sesuaikan path

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsOptional()
  @IsNumber()
  age?: number;

  @IsNotEmpty()
  @IsEnum(countryEnum)
  country: countryEnum;

  @IsNotEmpty()
  @IsEnum(genderEnum)
  gender: genderEnum;

  @IsNotEmpty()
  @IsString()
  password: string;
}
