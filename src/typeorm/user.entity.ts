import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tweet } from "./tweet.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    @Column()
    createdAt: string;

    @Column()
    updatedAt: string;

    @OneToMany(() => Tweet, (tweet) => tweet.user)
    tweets: Tweet[];
}