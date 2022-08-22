import { Tweet, User } from "src/typeorm";
import { EntityRepository, Repository } from "typeorm";
import { CreateTweetDto } from "./dto/create.tweet.dto";

@EntityRepository(Tweet)
export class TweetRepository extends Repository<Tweet>{
    async createPost(
        createTweetDto: CreateTweetDto,
        user: User,
    ): Promise<Tweet> {
        const { title, postText } = createTweetDto;

        // Repository用オブジェクト生成
        const post = this.create({
            title,
            postText,
            username: user.username,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            user,
        });
        // このレポジトリにオブジェクト保存
        await this.save(post);

        return post;
    }
}