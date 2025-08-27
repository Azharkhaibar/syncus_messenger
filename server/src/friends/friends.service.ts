import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Repository } from 'typeorm';
import { Friend } from './entities/friend.entity';
import { CreateFriendDto } from './dto/create-friend.dto';
import { FriendStatus } from './interface/friend.interface'; // pastikan path benar
import { Users } from 'src/users/entities/user.entity';

@Injectable()
export class FriendsService {
  constructor(
    @InjectRepository(Friend)
    private readonly friendRepository: Repository<Friend>,
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}

  async create(createFriendDto: CreateFriendDto) {
    const { user_id, friend_id } = createFriendDto;

    // cek user valid
    const user = await this.userRepository.findOne({
      where: { user_id: user_id },
    });
    const friendUser = await this.userRepository.findOne({
      where: { user_id: friend_id },
    });

    if (!user || !friendUser) {
      throw new NotFoundException('User not found');
    }

    // cek apakah sudah ada relasi A-B atau B-A
    const existingFriend = await this.friendRepository.findOne({
      where: [
        { user_id: { user_id }, friend_id: { user_id: friend_id } }, // ✅ pakai relasi object
        { user_id: { user_id: friend_id }, friend_id: { user_id } },
      ],
      relations: ['user_id', 'friend_id'],
    });

    if (existingFriend) {
      throw new BadRequestException(
        'Friend request already exists or already friends',
      );
    }

    const friend = this.friendRepository.create({
      user_id: user,
      friend_id: friendUser,
      status: FriendStatus.PENDING,
    });

    return this.friendRepository.save(friend);
  }

  async acceptFriendRequest(id: number) {
    const friendRequest = await this.friendRepository.findOne({
      where: { id },
    });
    if (!friendRequest) throw new NotFoundException('Friend request not found');

    friendRequest.status = FriendStatus.ACCEPTED;
    return this.friendRepository.save(friendRequest);
  }

  async rejectFriendRequest(id: number) {
    const friendRequest = await this.friendRepository.findOne({
      where: { id },
    });
    if (!friendRequest) throw new NotFoundException('Friend request not found');

    friendRequest.status = FriendStatus.REJECTED;
    return this.friendRepository.save(friendRequest);
  }

  async getFriends(userId: number) {
    return this.friendRepository.find({
      where: [
        { user_id: { user_id: userId }, status: FriendStatus.ACCEPTED }, // ✅ relasi object
        { friend_id: { user_id: userId }, status: FriendStatus.ACCEPTED },
      ],
      relations: ['user_id', 'friend_id'],
    });
  }

  async getPendingRequests(userId: number) {
    return this.friendRepository.find({
      where: { friend_id: Equal(userId), status: FriendStatus.PENDING },
      relations: ['user_id'],
    });
  }
}
