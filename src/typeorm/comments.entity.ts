import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Posts } from '.';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 100,
    nullable: false,
  })
  commentBody: string;

  @Column({
    nullable: false,
  })
  username: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;

  @ManyToOne(() => Posts, (post) => post.comments)
  posts: Posts;

  @Column()
  postId: string;
}
