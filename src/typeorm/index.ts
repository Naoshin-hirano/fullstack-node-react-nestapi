import { Comment } from "./comments.entity";
import { Likes } from "./likes.entity";
import { Relationships } from "./relationships.entity";
import { Tag } from "./tag.entity";
import { Tweet } from "./tweet.entity";
import { User } from "./user.entity";

const entities = [Tweet, User, Likes, Comment, Tag, Relationships];
export { Tweet, User, Likes, Comment, Tag, Relationships };

export default entities;