import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { User } from 'src/typeorm';
import { GetUser } from 'src/user/decorator/get-user.docorator';
import { JwtAuthGuard } from 'src/user/guards/jwt-auth.guard';
import { RelationshipsService } from './relationships.service';

@Controller('relationships')
export class RelationshipsController {
    constructor(private readonly relationshipsService: RelationshipsService) { }

    @Post()
    @UseGuards(JwtAuthGuard)
    async followOrUnfollow(
        @Body('followedId') followedId: string,
        @GetUser() user: User,
    ): Promise<boolean> {
        return await this.relationshipsService.followOrUnfollow(followedId, user);
    }
}