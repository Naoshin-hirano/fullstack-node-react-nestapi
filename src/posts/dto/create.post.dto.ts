import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(40)
  title: string;

  @IsString()
  @IsNotEmpty()
  postText: string;
}
