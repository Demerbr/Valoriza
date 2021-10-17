import { Request, Response } from "express"
import { CreateUserUseCase } from "../useCases/UserUseCase/createUserUseCase"


class CreateUserController{

    async handle(request: Request, response: Response){
        const {name, email, admin, password} = request.body 
        const createUserUseCase = new CreateUserUseCase()

        

    
            
          const user = await createUserUseCase.execute({name, email, admin, password})

            return response.status(201).json(user)
        

        }

        

    }



export { CreateUserController }