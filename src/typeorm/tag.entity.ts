import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Posts } from './post.entity';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 50,
    nullable: false,
  })
  name: string;

  @Column()
  createAt: string;

  @ManyToMany(() => Posts, (post) => post.tags, {
    onDelete: 'CASCADE',
  })
  @JoinTable()
  posts: Posts[];
}
