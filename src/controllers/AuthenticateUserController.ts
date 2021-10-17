import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "../useCases/AuthenticateUserUseCase/AuthenticateUserUseCase";




class AuthenticateUserController {

    async handle(request: Request, response: Response){
        const { email, password} = request.body

        const authenticateUserUSeCase = new AuthenticateUserUseCase()

        const token = await authenticateUserUSeCase.execute({email, password})

        return response.json(token)
    }

}

export { AuthenticateUserController }