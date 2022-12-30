import { Comment } from './comments.entity';
import { Likes } from './likes.entity';
import { Relationships } from './relationships.entity';
import { Tag } from './tag.entity';
import { Posts } from './post.entity';
import { User } from './user.entity';

const entities = [Posts, User, Likes, Comment, Tag, Relationships];
export { Posts, User, Likes, Comment, Tag, Relationships };

export default entities;
