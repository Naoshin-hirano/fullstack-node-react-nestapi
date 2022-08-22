import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Tag } from 'src/typeorm';
import { JwtAuthGuard } from 'src/user/guards/jwt-auth.guard';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
    constructor(private readonly tagsService: TagsService) { }

    @Get()
    async findAll(): Promise<Tag[]> {
        return await this.tagsService.findAll();
    };

    @Post()
    @UseGuards(JwtAuthGuard)
    async create(
        @Body('tagName') tagName: string,
    ): Promise<Tag> {
        return await this.tagsService.create(tagName);
    }
}