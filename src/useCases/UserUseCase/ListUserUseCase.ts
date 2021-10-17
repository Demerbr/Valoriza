import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../../repositories/UserRepository"
import { classToPlain } from "class-transformer"





class ListUserUseCase {

    async execute(){
        const userREpositories = getCustomRepository(UsersRepository)

        const users = await userREpositories.find()

        return classToPlain(users)
    }


}

export { ListUserUseCase }