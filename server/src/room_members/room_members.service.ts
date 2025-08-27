import { Injectable } from '@nestjs/common';
import { CreateRoomMemberDto } from './dto/create-room_member.dto';
import { UpdateRoomMemberDto } from './dto/update-room_member.dto';

@Injectable()
export class RoomMembersService {
  create(createRoomMemberDto: CreateRoomMemberDto) {
    return 'This action adds a new roomMember';
  }

  findAll() {
    return `This action returns all roomMembers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} roomMember`;
  }

  update(id: number, updateRoomMemberDto: UpdateRoomMemberDto) {
    return `This action updates a #${id} roomMember`;
  }

  remove(id: number) {
    return `This action removes a #${id} roomMember`;
  }
}
