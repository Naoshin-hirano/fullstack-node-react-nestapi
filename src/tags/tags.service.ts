import { Injectable } from '@nestjs/common';
import { Tag } from 'src/typeorm';
import { TagsRepository } from './tags.repository';

@Injectable()
export class TagsService {
    constructor(private readonly tagsRepository: TagsRepository) { }

    async findAll(): Promise<Tag[]> {
        return await this.tagsRepository.find();
    }

    async create(name: string): Promise<Tag> {
        return await this.tagsRepository.createTag(name);
    }
}