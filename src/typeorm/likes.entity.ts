import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Tweet } from "./tweet.entity";
import { User } from "./user.entity";

@Entity()
export class Likes {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    createdAt: string;

    @ManyToOne(() => User, (user) => user.likes)
    user: User;

    @ManyToOne(() => Tweet, (tweet) => tweet.likes)
    tweet: Tweet

    @Column()
    userId: string;

    @Column()
    tweetId: string;
}