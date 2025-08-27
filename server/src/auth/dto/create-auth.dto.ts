import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateAuthDto {
  @IsNotEmpty()
  user_id: number; // user yang punya auth

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}


