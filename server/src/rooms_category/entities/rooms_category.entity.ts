import { Room } from 'src/rooms/entities/room.entity';
import { roomTag } from 'src/rooms/interfaces/room.interface';
import { Entity, JoinColumn, OneToMany } from 'typeorm';
import { PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity('rooms_category')
export class RoomsCategory {
  @PrimaryGeneratedColumn()
  category_room_id: number;

  @Column({ type: 'enum', enum: roomTag, nullable: false })
  room_tag: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @OneToMany(() => Room, (room) => room.fk_room_category)
  rooms: Room[];
}
