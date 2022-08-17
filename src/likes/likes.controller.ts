import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { User } from 'src/typeorm';
import { GetUser } from 'src/user/decorator/get-user.docorator';
import { JwtAuthGuard } from 'src/user/guards/jwt-auth.guard';
import { LikeService } from './likes.service';

@Controller('like')
export class LikeController {
    constructor(private readonly likeService: LikeService) { }

    @Post()
    @UseGuards(JwtAuthGuard)
    async create(
        @Body('id') id: string,
        @GetUser() user: User,
    ): Promise<boolean> {
        return this.likeService.create(id, user);
    };
}