import { Users } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('notifications')
export class Notification {
  @PrimaryGeneratedColumn()
  notification_id: number;

  @ManyToOne(() => Users, (user) => user.notifications)
  @JoinColumn({ name: 'user_id' })
  user: Users;
}
