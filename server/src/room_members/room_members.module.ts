import { Module } from '@nestjs/common';
import { RoomMembersService } from './room_members.service';
import { RoomMembersGateway } from './room_members.gateway';

@Module({
  providers: [RoomMembersGateway, RoomMembersService],
})
export class RoomMembersModule {}
