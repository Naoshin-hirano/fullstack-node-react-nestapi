import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tweet } from "./tweet.entity";

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

    @ManyToMany(() => Tweet, (tweet) => tweet.tags, {
        onDelete: "CASCADE",
    })
    @JoinTable()
    tweets: Tweet[];
}