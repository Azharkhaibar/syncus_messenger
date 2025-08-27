import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import {
  MessageStatusEnum,
  MessageTypeEnum,
} from '../interface/messages.interface';

export class CreateMessageDto {
  @IsNumber()
  @IsNotEmpty()
  sender_id: number; // gunakan _id supaya jelas ini foreign key

  @IsNumber()
  @IsOptional()
  receiver_id?: number;

  @IsNumber()
  @IsOptional()
  room_id?: number;

  @IsString()
  @IsOptional()
  content: string;

  @IsEnum(MessageTypeEnum)
  @IsOptional()
  type?: MessageTypeEnum;

  @IsEnum(MessageStatusEnum)
  @IsOptional()
  status?: MessageStatusEnum;
}
