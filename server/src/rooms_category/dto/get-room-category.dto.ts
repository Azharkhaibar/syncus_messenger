import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class GetRoomsCategoryDto {
  id: number;
  room_tag: string;
  description?: string;
}
