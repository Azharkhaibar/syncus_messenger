import { PartialType } from '@nestjs/swagger';
import { CreateRoomsCategoryDto } from './create-rooms_category.dto';

export class UpdateRoomsCategoryDto extends PartialType(
  CreateRoomsCategoryDto,
) {}
