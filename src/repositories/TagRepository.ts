import { EntityRepository, Repository } from "typeorm";
import { Tag } from "../entities/Tags";




@EntityRepository(Tag)
class TagRepository extends Repository<Tag>{


}

export { TagRepository }