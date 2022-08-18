import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TweetModule } from './posts/tweet.module';
import { UserModule } from './user/user.module';
import { LikeModule } from './likes/likes.module';
import { CommentsModule } from './comments/comments.module';
import entities from './typeorm';

@Module({
    imports: [
        TweetModule,
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'Naoyakun1!',
            database: 'fullstack_nestapp',
            entities,
            synchronize: true,
        }),
        UserModule,
        LikeModule,
        CommentsModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule { }
