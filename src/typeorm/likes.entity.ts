import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Posts } from './post.entity';
import { User } from './user.entity';

@Entity()
export class Likes {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  createdAt: string;

  @ManyToOne(() => User, (user) => user.likes)
  user: User;

  @ManyToOne(() => Posts, (post) => post.likes)
  posts: Posts;

  @Column()
  userId: string;

  @Column()
  tweetId: string;
}
