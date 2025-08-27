import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Media } from './entities/media.entity';
import { GetMediaDto } from './dto/get-media.dto';
import { Message } from 'src/messages/entities/message.entity';

@Injectable()
export class MediaService {
  constructor(
    @InjectRepository(Media)
    private mediaRepository: Repository<Media>,
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,
  ) {}

  async create(createMediaDto: CreateMediaDto): Promise<CreateMediaDto> {
    const media = this.mediaRepository.create(createMediaDto);
    const savedMedia = await this.mediaRepository.save(media);
    return {
      message_id: savedMedia.message_fk?.id,
      url_media: savedMedia.url_media,
      type_media: savedMedia.media_type,
    };
  }

  async findAll(): Promise<GetMediaDto[]> {
    const getMediaListDto = await this.mediaRepository.find();
    return getMediaListDto.map((mediaList) => ({
      message_id: mediaList.message_fk?.id,
      url_media: mediaList.url_media,
      type_media: mediaList.media_type,
    }));
  }

  async findOne(id: number): Promise<GetMediaDto> {
    const media = await this.mediaRepository.findOne({
      where: { media_id: id },
      relations: ['message_fk'],
    });

    if (!media) {
      throw new NotFoundException(`Media with ID ${id} not found`);
    }

    return {
      message_id: media.message_fk?.id,
      url_media: media.url_media,
      type_media: media.media_type,
    };
  }

  update(id: number, updateMediaDto: UpdateMediaDto) {
    return `This action updates a #${id} media`;
  }

  remove(id: number) {
    return `This action removes a #${id} media`;
  }
}
