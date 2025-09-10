import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateFriendDto {
  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  @IsNumber()
  @IsNotEmpty()
  friend_id: number;
}
