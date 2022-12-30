import { Posts, User } from 'src/typeorm';
import { EntityRepository, Repository } from 'typeorm';
import { CreatePostDto } from './dto/create.post.dto';

@EntityRepository(Posts)
export class PostRepository extends Repository<Posts> {
  async createPost(createPostDto: CreatePostDto, user: User): Promise<Posts> {
    const { title, postText } = createPostDto;

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
