import { Posts } from "src/typeorm";
import { EntityRepository, Repository } from "typeorm";
import { CreatePostsDto } from "./dto/create.posts.dto";

@EntityRepository(Posts)
export class PostsRepository extends Repository<Posts>{
    async createPost(createPostsDto: CreatePostsDto): Promise<Posts> {
        const { title, postText, username } = createPostsDto;
        // Repository用オブジェクト生成
        const post = this.create({
            title,
            postText,
            username,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        });
        // このレポジトリにオブジェクト保存
        await this.save(post);

        return post;
    }
}