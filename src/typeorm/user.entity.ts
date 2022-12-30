import { Exclude } from 'class-transformer';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Likes } from './likes.entity';
import { Relationships } from './relationships.entity';
import { Posts } from './post.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  @Exclude({ toPlainOnly: true })
  password: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;

  @OneToMany(() => Posts, (post) => post.user)
  posts: Posts[];

  @OneToMany(() => Likes, (like) => like.user)
  likes: Likes[];

  @OneToMany(() => Relationships, (relationship) => relationship.followed)
  followed: Relationships[];

  @OneToMany(() => Relationships, (relationship) => relationship.following)
  following: Relationships[];
}
