import { Comment } from "./comments.entity";
import { Likes } from "./likes.entity";
import { Tweet } from "./tweet.entity";
import { User } from "./user.entity";

const entities = [Tweet, User, Likes, Comment];
export { Tweet, User, Likes, Comment };

export default entities;