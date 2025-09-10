import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { RoomMembersService } from './room_members.service';
import { CreateRoomMemberDto } from './dto/create-room_member.dto';
import { UpdateRoomMemberDto } from './dto/update-room_member.dto';

@WebSocketGateway()
export class RoomMembersGateway {
  constructor(private readonly roomMembersService: RoomMembersService) {}

  @SubscribeMessage('createRoomMember')
  create(@MessageBody() createRoomMemberDto: CreateRoomMemberDto) {
    return this.roomMembersService.create(createRoomMemberDto);
  }

  @SubscribeMessage('findAllRoomMembers')
  findAll() {
    return this.roomMembersService.findAll();
  }

  @SubscribeMessage('findOneRoomMember')
  findOne(@MessageBody() id: number) {
    return this.roomMembersService.findOne(id);
  }

  @SubscribeMessage('updateRoomMember')
  update(@MessageBody() updateRoomMemberDto: UpdateRoomMemberDto) {
    return this.roomMembersService.update(
      updateRoomMemberDto.id,
      updateRoomMemberDto,
    );
  }

  @SubscribeMessage('removeRoomMember')
  remove(@MessageBody() id: number) {
    return this.roomMembersService.remove(id);
  }
}
