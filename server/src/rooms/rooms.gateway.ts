import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';

// DTO tambahan untuk findOne & remove
export class FindOneRoomDto {
  id: number;
}

export class RemoveRoomDto {
  id: number;
}

@WebSocketGateway({
  cors: {
    origin: '*', // ganti dengan FE URL di production
  },
})
export class RoomsGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly roomsService: RoomsService) {}

  // CREATE
  @SubscribeMessage('createRoom')
  async create(
    @MessageBody() createRoomDto: CreateRoomDto,
    @ConnectedSocket() client: Socket,
  ): Promise<{ event: string; data: Room | string }> {
    try {
      const room = await this.roomsService.create(createRoomDto);
      client.broadcast.emit('roomCreated', room); // kirim ke client lain
      return { event: 'createRoom', data: room }; // kirim ke pembuat
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      return { event: 'createRoomError', data: message };
    }
  }

  // FIND ALL
  @SubscribeMessage('findAllRooms')
  async findAll(): Promise<{ event: string; data: Room[] | string }> {
    try {
      const rooms = await this.roomsService.findAll();
      return { event: 'findAllRooms', data: rooms };
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      return { event: 'findAllRoomsError', data: message };
    }
  }

  // FIND ONE
  @SubscribeMessage('findOneRoom')
  async findOne(
    @MessageBody() body: FindOneRoomDto,
  ): Promise<{ event: string; data: Room | string }> {
    try {
      const room = await this.roomsService.findOne(body.id);
      return { event: 'findOneRoom', data: room };
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      return { event: 'findOneRoomError', data: message };
    }
  }

  // UPDATE
  @SubscribeMessage('updateRoom')
  async update(
    @MessageBody() updateRoomDto: UpdateRoomDto,
  ): Promise<{ event: string; data: Room | string }> {
    try {
      const updated = await this.roomsService.update(
        updateRoomDto.id,
        updateRoomDto,
      );
      this.server.emit('roomUpdated', updated);
      return { event: 'updateRoom', data: updated };
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      return { event: 'updateRoomError', data: message };
    }
  }

  // REMOVE
  @SubscribeMessage('removeRoom')
  async remove(
    @MessageBody() body: RemoveRoomDto,
  ): Promise<{ event: string; data: number | string }> {
    try {
      await this.roomsService.remove(body.id);
      this.server.emit('roomRemoved', body.id);
      return { event: 'removeRoom', data: body.id };
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      return { event: 'removeRoomError', data: message };
    }
  }
}

// import {
//   WebSocketGateway,
//   SubscribeMessage,
//   MessageBody,
// } from '@nestjs/websockets';
// import { RoomsService } from './rooms.service';
// import { CreateRoomDto } from './dto/create-room.dto';
// import { UpdateRoomDto } from './dto/update-room.dto';

// @WebSocketGateway({})
// export class RoomsGateway {
//   constructor(private readonly roomsService: RoomsService) {}

//   @SubscribeMessage('createRoom')
//   create(@MessageBody() createRoomDto: CreateRoomDto) {
//     return this.roomsService.create(createRoomDto);
//   }

//   @SubscribeMessage('findAllRooms')
//   findAll() {
//     return this.roomsService.findAll();
//   }

//   @SubscribeMessage('findOneRoom')
//   findOne(@MessageBody() id: number) {
//     return this.roomsService.findOne(id);
//   }

//   @SubscribeMessage('updateRoom')
//   update(@MessageBody() updateRoomDto: UpdateRoomDto) {
//     return this.roomsService.update(updateRoomDto.id, updateRoomDto);
//   }

//   @SubscribeMessage('removeRoom')
//   remove(@MessageBody() id: number) {
//     return this.roomsService.remove(id);
//   }
// }
