import { IsEnum, IsNotEmpty, IsOptional, IsUrl } from 'class-validator';
import { media_type } from '../interfaces/media.interface';

export class GetMediaDto {
  @IsNotEmpty()
  message_id: number;

  @IsUrl()
  @IsOptional()
  url_media?: string;

  @IsNotEmpty()
  @IsEnum(media_type)
  type_media: media_type;
}
