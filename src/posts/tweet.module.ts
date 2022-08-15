import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TweetController } from './tweet.controller';
import { TweetRepository } from './tweet.repository';
import { TweetService } from './tweet.service';

@Module({
    imports: [TypeOrmModule.forFeature([TweetRepository])],
    controllers: [TweetController],
    providers: [TweetService]
})
export class TweetModule { }
