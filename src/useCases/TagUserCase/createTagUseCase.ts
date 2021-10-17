import { getCustomRepository } from "typeorm";
import { TagRepository } from "../../repositories/TagRepository";





class CreateTagUseCase {

    async execute(name: string){

    const tagRepository = getCustomRepository(TagRepository)

    if( !name ){

        throw new Error("Incorrect Name!");
    
    }

    const tagAlreadyExist = await tagRepository.findOne({name})

    if(tagAlreadyExist){
        throw new Error("Alreadt Exists name");
        
    }

    const tag = tagRepository.create({name})

    await tagRepository.save(tag)

    return tag

    }
}

export { CreateTagUseCase}