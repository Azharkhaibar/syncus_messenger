import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './entities/message.entity';
import { Users } from 'src/users/entities/user.entity';
import { Room } from 'src/rooms/entities/room.entity';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,

    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,

    @InjectRepository(Room)
    private readonly roomRepository: Repository<Room>,
  ) {}

  // CREATE
  async create(createMessageDto: CreateMessageDto): Promise<Message> {
    const sender = await this.userRepository.findOneBy({
      user_id: createMessageDto.sender_id,
    });
    if (!sender)
      throw new NotFoundException(
        `Sender #${createMessageDto.sender_id} not found`,
      );
    const receiver = createMessageDto.receiver_id
      ? await this.userRepository.findOneBy({
          user_id: createMessageDto.receiver_id,
        })
      : null;

    const room = createMessageDto.room_id
      ? await this.roomRepository.findOneBy({
          room_id: createMessageDto.room_id,
        })
      : null;

    const message = this.messageRepository.create({
      sender,
      receiver: receiver ?? undefined,
      room: room ?? undefined,
      content: createMessageDto.content,
      type: createMessageDto.type,
      status: createMessageDto.status,
    });

    return this.messageRepository.save(message);
  }

  // FIND ALL
  async findAll(): Promise<Message[]> {
    return this.messageRepository.find({
      relations: ['sender', 'receiver', 'room', 'media'],
      order: { created_at: 'DESC' },
    });
  }

  // FIND ONE
  async findOne(id: number): Promise<Message> {
    const message = await this.messageRepository.findOne({
      where: { id },
      relations: ['sender', 'receiver', 'room', 'media'],
    });
    if (!message) throw new NotFoundException(`Message #${id} not found`);
    return message;
  }

  // UPDATE
  async update(
    id: number,
    updateMessageDto: UpdateMessageDto,
  ): Promise<Message> {
    const message = await this.findOne(id);

    if (updateMessageDto.content !== undefined)
      message.content = updateMessageDto.content;
    if (updateMessageDto.type !== undefined)
      message.type = updateMessageDto.type;
    if (updateMessageDto.status !== undefined)
      message.status = updateMessageDto.status;

    if (updateMessageDto.receiver_id !== undefined) {
      const receiver = await this.userRepository.findOneBy({
        user_id: updateMessageDto.receiver_id,
      });
      if (!receiver)
        throw new NotFoundException(
          `Receiver #${updateMessageDto.receiver_id} not found`,
        );
      message.receiver = receiver;
    }

    if (updateMessageDto.room_id !== undefined) {
      const room = await this.roomRepository.findOneBy({
        room_id: updateMessageDto.room_id,
      });
      if (!room)
        throw new NotFoundException(
          `Room #${updateMessageDto.room_id} not found`,
        );
      message.room = room;
    }

    return this.messageRepository.save(message);
  }

  // REMOVE
  async remove(id: number): Promise<void> {
    const message = await this.findOne(id);
    await this.messageRepository.remove(message);
  }
}
