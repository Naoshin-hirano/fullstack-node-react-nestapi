import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateTweetDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(40)
    title: string;

    @IsString()
    @IsNotEmpty()
    postText: string;
}