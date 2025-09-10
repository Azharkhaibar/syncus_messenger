import { IsUrl } from 'class-validator';
import { Message } from 'src/messages/entities/message.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { media_type } from '../interfaces/media.interface';

@Entity('media')
export class Media {
  @PrimaryGeneratedColumn()
  media_id: number;

  @ManyToOne(() => Message, (message) => message.media, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'message_id' })
  message_fk: Message;

  @Column({ type: 'varchar', length: 500, nullable: true })
  @IsUrl()
  url_media?: string;

  @Column({ type: 'enum', enum: media_type, nullable: false })
  media_type: media_type;
}
