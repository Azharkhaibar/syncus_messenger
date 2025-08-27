import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import {
  countryEnum,
  genderEnum,
  UserStatus,
} from '../interface/users.interface';
import { Profile } from 'src/profile/entities/profile.entity';
import { Auth } from 'src/auth/entities/auth.entity';
import { Room } from 'src/rooms/entities/room.entity';
import { Message } from 'src/messages/entities/message.entity';
import { RoomMember } from 'src/room_members/entities/room_member.entity';
import { Notification } from 'src/notification/entities/notification.entity';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ nullable: false, unique: true })
  username: string;
  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  age: number;

  @Column({ nullable: false, type: 'enum', enum: countryEnum })
  country: countryEnum;

  @Column({ nullable: false, type: 'enum', enum: genderEnum })
  gender: genderEnum;

  @OneToMany(() => Message, (message) => message.sender)
  sentMessages: Message[];

  @OneToMany(() => Message, (message) => message.receiver)
  receivedMessages: Message[];

  @OneToMany(() => RoomMember, (memberRoom) => memberRoom.user_member_room)
  roomMembers: RoomMember[];

  @OneToMany(() => Notification, (notification) => notification.user)
  notifications: Notification[];

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @Column({ type: 'enum', enum: UserStatus, default: UserStatus.ACTIVE })
  status: UserStatus;

  // @Column({ default: 0})
  // profile_viewed: number;

  @Column({ nullable: true, type: 'timestamp' })
  last_login?: Date;

  @ManyToMany(() => Room, (room) => room.favorited_by)
  @JoinTable({
    name: 'user_favorite_rooms',
    joinColumn: { name: 'user_id', referencedColumnName: 'user_id' },
    inverseJoinColumn: { name: 'room_id', referencedColumnName: 'room_id' },
  })
  favorite_rooms: Room[];

  @OneToMany(() => Room, (room) => room.creator)
  created_rooms: Room[];

  // One-to-One to Auth
  @OneToOne(() => Auth, (auth) => auth.user, { cascade: true, eager: true })
  @JoinColumn()
  auth: Auth;

  @OneToOne(() => Profile, (profile) => profile.user, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  profile: Profile;
}
