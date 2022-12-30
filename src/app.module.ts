import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from './posts/post.module';
import { UserModule } from './user/user.module';
import { LikeModule } from './likes/likes.module';
import { CommentsModule } from './comments/comments.module';
import { RelationshipsModule } from './relationships/relationships.module';
import { TagsModule } from './tags/tags.module';
import entities from './typeorm';

@Module({
  imports: [
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
    PostModule,
    UserModule,
    LikeModule,
    CommentsModule,
    RelationshipsModule,
    TagsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
