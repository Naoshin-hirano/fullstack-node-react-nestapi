import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Comment } from './comments.entity';
import { Likes } from './likes.entity';
import { Tag } from './tag.entity';
import { User } from './user.entity';
// typescriptでのモデルのようなもの
@Entity()
export class Posts {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: false,
  })
  title: string;

  @Column({
    length: 40,
    nullable: false,
  })
  postText: string;

  @Column({
    nullable: false,
  })
  username: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;

  @Column()
  userId: string;

  @OneToMany(() => Likes, (like) => like.posts)
  likes: Likes[];

  @OneToMany(() => Comment, (comment) => comment.posts)
  comments: Comment[];

  @ManyToMany(() => Tag, (tag) => tag.posts, {
    onDelete: 'CASCADE',
  })
  tags: Tag[];
}
