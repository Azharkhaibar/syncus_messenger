import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from './user.entity';

@Entity('profile_viewed')
export class ProfileViewed {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'viewer_id' })
  viewer: Users;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'viewed_user_id' })
  viewedUser: Users;

  @CreateDateColumn()
  createdAt: Date;
}
