import { Comment } from "./comments.entity";
import { Likes } from "./likes.entity";
import { Tag } from "./tag.entity";
import { Tweet } from "./tweet.entity";
import { User } from "./user.entity";

const entities = [Tweet, User, Likes, Comment, Tag];
export { Tweet, User, Likes, Comment, Tag };

export default entities;