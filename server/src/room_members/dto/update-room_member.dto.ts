import { PartialType } from '@nestjs/mapped-types';
import { CreateRoomMemberDto } from './create-room_member.dto';

export class UpdateRoomMemberDto extends PartialType(CreateRoomMemberDto) {
  id: number;
}
