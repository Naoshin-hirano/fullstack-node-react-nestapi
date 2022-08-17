import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Likes } from "./likes.entity";
import { User } from "./user.entity";
// typescriptでのモデルのようなもの
@Entity()
export class Tweet {
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

    @ManyToOne(() => User, (user) => user.tweets)
    user: User;

    @Column()
    userId: string;

    @OneToMany(() => Likes, (like) => like.tweet)
    likes: Likes[];
}