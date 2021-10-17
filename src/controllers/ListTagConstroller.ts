import { Request, Response } from "express";
import { ListTagUseCase } from "../useCases/TagUserCase/ListTagUseCase";




class ListTagController {

    async handle(request: Request, response: Response){
        const listTagRepositories = new ListTagUseCase()

        const tags = await listTagRepositories.execute()

        return response.status(200).json(tags)
    }


}

export { ListTagController }