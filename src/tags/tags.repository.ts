import { Tag } from "src/typeorm";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Tag)
export class TagsRepository extends Repository<Tag>{
    async createTag(
        name: string,
    ): Promise<Tag> {
        const tagObj = this.create({
            name,
            createAt: new Date().toISOString(),
        })
        await this.save(tagObj);

        return tagObj;
    }
}