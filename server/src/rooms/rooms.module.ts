import { Module } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { RoomsGateway } from './rooms.gateway';
import { Room } from './entities/room.entity';
import { RoomMember } from 'src/room_members/entities/room_member.entity';
import { Message } from 'src/messages/entities/message.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Room])],
  providers: [RoomsGateway, RoomsService],
  exports: [RoomsService]
})
export class RoomsModule {}
