import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Room } from './entities/room.entity';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Room)
    private readonly roomsRepository: Repository<Room>,
  ) {}

  async create(createRoomDto: CreateRoomDto): Promise<Room> {
    const room = this.roomsRepository.create(createRoomDto);
    return await this.roomsRepository.save(room);
  }

  async findAll(): Promise<Room[]> {
    return await this.roomsRepository.find({
      relations: ['creator', 'fk_room_category', 'roomMembers'],
    });
  }

  async findOne(id: number): Promise<Room> {
    const room = await this.roomsRepository.findOne({
      where: { room_id: id },
      relations: ['creator', 'fk_room_category', 'roomMembers'],
    });

    if (!room) {
      throw new NotFoundException(`Room with ID ${id} not found`);
    }

    return room;
  }

  async update(id: number, updateRoomDto: UpdateRoomDto): Promise<Room> {
    await this.roomsRepository.update(id, updateRoomDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.roomsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Room with ID ${id} not found`);
    }
  }
}

// import { Injectable } from '@nestjs/common';
// import { CreateRoomDto } from './dto/create-room.dto';
// import { UpdateRoomDto } from './dto/update-room.dto';

// @Injectable()
// export class RoomsService {
//   create(createRoomDto: CreateRoomDto) {
//     return 'This action adds a new room';
//   }

//   findAll() {
//     return `This action returns all rooms`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} room`;
//   }

//   update(id: number, updateRoomDto: UpdateRoomDto) {
//     return `This action updates a #${id} room`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} room`;
//   }
// }
