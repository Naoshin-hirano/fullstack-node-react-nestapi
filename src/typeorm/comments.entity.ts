import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Tweet } from ".";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        length: 100,
        nullable: false,
    })
    commentBody: string

    @Column({
        nullable: false,
    })
    username: string

    @Column()
    createdAt: string;

    @Column()
    updatedAt: string;

    @ManyToOne(() => Tweet, (tweet) => tweet.comments)
    tweet: Tweet;

    @Column()
    tweetId: string;
}