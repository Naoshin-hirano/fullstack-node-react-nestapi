import { User } from "src/typeorm";
import { Likes } from "src/typeorm/likes.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Likes)
export class LikeRepository extends Repository<Likes>{
    async createLike(
        id: string,
        user: User,
    ): Promise<boolean> {
        const found = await this.findOne({ userId: user.id, tweetId: id });
        if (!found) {
            const like = await this.create({
                createdAt: new Date().toISOString(),
                userId: user.id,
                tweetId: id,
            })
            await this.save(like);
            return true;
        } else {
            await this.delete({ userId: user.id, tweetId: id });
            return false;
        }
    }
}