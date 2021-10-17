import { getCustomRepository } from "typeorm"
import { TagRepository } from "../../repositories/TagRepository"
import { classToPlain } from "class-transformer"





class ListTagUseCase {

    async execute(){
        const tagRepositories = getCustomRepository(TagRepository)

        const tags = await tagRepositories.find();


        return classToPlain(tags)
    }


}

export { ListTagUseCase }