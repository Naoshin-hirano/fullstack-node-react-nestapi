import { Relationships, User } from "src/typeorm";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Relationships)
export class RelationshipsRepository extends Repository<Relationships>{
    async followOrUnfollow(
        followedId: string,
        user: User,
    ): Promise<boolean> {
        const found = await this.findOne({
            followingId: user.id,
            followedId: followedId,
        });
        if (!found) {
            const relationship = this.create({
                followingId: user.id,
                followedId: followedId,
            });
            await this.save(relationship);
            return true
        } else {
            await this.delete({
                followingId: user.id,
                followedId: followedId,
            });
            return false;
        }
    }
};