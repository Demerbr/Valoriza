import { Request, Response } from "express";
import { ListUserUseCase } from "../useCases/UserUseCase/ListUserUseCase";





class ListUserController {

    async handle(request: Request, response: Response){
        const listUserUseCase = new ListUserUseCase()

        const users = await listUserUseCase.execute()

        return response.status(200).json(users)
    }


}

export { ListUserController }