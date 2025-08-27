import { IsOptional, IsString } from 'class-validator';

export class CreateProfileDto {
  @IsOptional()
  @IsString()
  profile_picture?: string;

  @IsOptional()
  @IsString()
  bio?: string;
}
