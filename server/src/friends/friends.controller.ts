import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Query,
} from '@nestjs/common';
import { FriendsService } from './friends.service';
import { CreateFriendDto } from './dto/create-friend.dto';

@Controller('friends')
export class FriendsController {
  constructor(private readonly friendsService: FriendsService) {}

  // A kirim permintaan ke B
  @Post()
  create(@Body() createFriendDto: CreateFriendDto) {
    return this.friendsService.create(createFriendDto);
  }

  // List semua teman yang sudah accept
  @Get()
  findAll(@Query('userId') userId: number) {
    return this.friendsService.getFriends(userId);
  }

  // List permintaan friend request yang masuk (buat si B)
  @Get('pending')
  getPendingRequests(@Query('userId') userId: number) {
    return this.friendsService.getPendingRequests(userId);
  }

  // Accept friend request
  @Patch(':id/accept')
  accept(@Param('id') id: number) {
    return this.friendsService.acceptFriendRequest(id);
  }

  // Reject friend request
  @Patch(':id/reject')
  reject(@Param('id') id: number) {
    return this.friendsService.rejectFriendRequest(id);
  }
}
