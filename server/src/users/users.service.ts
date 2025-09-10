import { plainToInstance } from 'class-transformer';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/user.entity';
import { GetUserDto } from './dto/get-user.dto';
import bcrypt from 'bcrypt';
import { Auth } from 'src/auth/entities/auth.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<GetUserDto> {
    const { password, ...userData } = createUserDto;
    const hashpswd = await bcrypt.hash(password, 20);

    const user = this.usersRepository.create({
      ...userData,
      auth: {
        hash_password: hashpswd,
      } as Auth,
    });
    const savedUser = await this.usersRepository.save(user);
    return plainToInstance(GetUserDto, savedUser, {
      excludeExtraneousValues: true,
    });
  }

  async findAll(): Promise<GetUserDto[]> {
    const users = await this.usersRepository.find();
    return plainToInstance(GetUserDto, users, {
      excludeExtraneousValues: true,
    });
  }

  async findOne(id: number): Promise<GetUserDto> {
    const user = await this.usersRepository.findOne({
      where: { user_id: id },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return plainToInstance(GetUserDto, user, { excludeExtraneousValues: true });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<GetUserDto> {
    await this.usersRepository.update(id, updateUserDto);
    const updatedUser = await this.usersRepository.findOne({
      where: { user_id: id },
    });

    if (!updatedUser) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return plainToInstance(GetUserDto, updatedUser, {
      excludeExtraneousValues: true,
    });
  }

  async remove(id: number): Promise<GetUserDto | null> {
    const user = await this.usersRepository.findOne({
      where: { user_id: id },
    });

    if (!user) return null;

    await this.usersRepository.remove(user);
    return plainToInstance(GetUserDto, user, { excludeExtraneousValues: true });
  }
}
