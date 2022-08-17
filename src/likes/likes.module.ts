import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LikeController } from './likes.controller';
import { LikeRepository } from './likes.repository';
import { LikeService } from './likes.service';

@Module({
    imports: [TypeOrmModule.forFeature([LikeRepository])],
    controllers: [LikeController],
    providers: [LikeService]
})
export class LikeModule { }