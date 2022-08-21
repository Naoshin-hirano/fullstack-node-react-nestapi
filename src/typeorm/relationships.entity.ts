import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from ".";

@Entity()
export class Relationships {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => User, (user) => user.following)
    following: User;

    @Column()
    followingId: string;

    @ManyToOne(() => User, (user) => user.followed)
    followed: User;

    @Column()
    followedId: string;
}