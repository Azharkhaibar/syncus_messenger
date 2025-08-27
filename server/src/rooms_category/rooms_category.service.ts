import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoomsCategoryDto } from './dto/create-rooms_category.dto';
import { UpdateRoomsCategoryDto } from './dto/update-rooms_category.dto';
import { Repository } from 'typeorm';
import { RoomsCategory } from './entities/rooms_category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { GetRoomsCategoryDto } from 'src/rooms_category/dto/get-room-category.dto';
@Injectable()
export class RoomsCategoryService {
  constructor(
    @InjectRepository(RoomsCategory)
    private roomCategoryRepository: Repository<RoomsCategory>,
  ) {}

  async create(
    createRoomsCategoryDto: CreateRoomsCategoryDto,
  ): Promise<CreateRoomsCategoryDto> {
    const roomsCategory = this.roomCategoryRepository.create(
      createRoomsCategoryDto,
    );
    await this.roomCategoryRepository.save(roomsCategory);
    return roomsCategory;
  }

  async findAll(): Promise<GetRoomsCategoryDto[]> {
    const findRoomCategory = await this.roomCategoryRepository.find({
      relations: ['rooms'],
    });
    return plainToInstance(GetRoomsCategoryDto, findRoomCategory, {
      excludeExtraneousValues: true,
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} roomsCategory`;
  }

  async update(
    id: number,
    updateRoomsCategoryDto: UpdateRoomsCategoryDto,
  ): Promise<RoomsCategory> {
    await this.roomCategoryRepository.update(id, updateRoomsCategoryDto);

    const updated = await this.roomCategoryRepository.findOneBy({
      category_room_id: id,
    });
    if (!updated) {
      throw new NotFoundException(`Room category with ID ${id} not found`);
    }
    return updated;
  }

  remove(id: number) {
    return `This action removes a #${id} roomsCategory`;
  }
}
