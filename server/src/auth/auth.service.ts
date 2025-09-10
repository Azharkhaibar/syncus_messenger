import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from './entities/auth.entity';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    // ambil dari Auth.entity.ts
    @InjectRepository(Auth)
    private authRepository: Repository<Auth>,
  ) {}

  async create(createAuthDto: CreateAuthDto): Promise<Auth> {
    const hashedpswd = await bcrypt.hash(createAuthDto.password, 20);
    const auth = this.authRepository.create({
      user: { user_id: createAuthDto.user_id } as any,
      hash_password: hashedpswd,
    });
    return this.authRepository.save(auth);
  }

  async findAll(): Promise<Auth[]> {
    return this.authRepository.find();
  }

  async findOne(id: number): Promise<Auth> {
    const auth = await this.authRepository.findOne({
      where: { user_id: id }, // pakai user_id, bukan auth_user_id
      relations: ['user'],
    });
    if (!auth) throw new NotFoundException(`id ${id} kgk ada`);
    return auth;
  }

  async update(id: number, updateAuthDto: UpdateAuthDto): Promise<Auth> {
    const auth = await this.findOne(id);
    Object.assign(auth, updateAuthDto);
    return this.authRepository.save(auth);
  }

  async remove(id: number): Promise<Auth> {
    const auth = await this.findOne(id);
    await this.authRepository.remove(auth);
    return auth;
  }
}
