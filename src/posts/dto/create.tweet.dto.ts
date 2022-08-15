import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreatePostsDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(40)
    title: string;

    @IsString()
    @IsNotEmpty()
    postText: string;

    @IsString()
    @IsNotEmpty()
    username: string;
}