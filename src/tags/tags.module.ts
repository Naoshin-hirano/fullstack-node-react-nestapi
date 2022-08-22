import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagsController } from './tags.controller';
import { TagsRepository } from './tags.repository';
import { TagsService } from './tags.service';

@Module({
    imports: [TypeOrmModule.forFeature([TagsRepository])],
    controllers: [TagsController],
    providers: [TagsService]
})
export class TagsModule { }