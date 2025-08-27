import { IsNumber, IsOptional } from 'class-validator';

export class FilterRoom {
  @IsNumber()
  @IsOptional()
  room_id?: number;

  @IsNumber()
  @IsOptional()
  creator_id?: number;

  @IsNumber()
  @IsOptional()
  category_room_id?: number;
}
