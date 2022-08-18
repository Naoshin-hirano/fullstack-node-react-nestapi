import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateCommentDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    commentBody: string;

    @IsString()
    @IsNotEmpty()
    tweetId: string;
}