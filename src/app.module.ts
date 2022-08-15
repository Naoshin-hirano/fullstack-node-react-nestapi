import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';
import entities from './typeorm';

@Module({
    imports: [
        PostsModule,
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'Naoyakun1!',
            database: 'fullstack_nestapp',
            entities,
            synchronize: true,
        })],
    controllers: [],
    providers: [],
})
export class AppModule { }
