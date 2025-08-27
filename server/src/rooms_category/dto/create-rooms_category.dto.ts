import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateRoomsCategoryDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 100)
  room_tag: string;

  @IsString()
  description: string;
}
