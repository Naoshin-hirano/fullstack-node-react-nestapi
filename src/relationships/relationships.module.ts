import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RelationshipsController } from './relationships.controller';
import { RelationshipsRepository } from './relationships.repository';
import { RelationshipsService } from './relationships.service';

@Module({
    imports: [TypeOrmModule.forFeature([RelationshipsRepository])],
    controllers: [RelationshipsController],
    providers: [RelationshipsService]
})
export class RelationshipsModule { }