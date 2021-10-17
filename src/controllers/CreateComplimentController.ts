import { Request, Response } from "express";
import { CreateComplimentsUseCase } from "../useCases/ComplimentsUseCase/CreateComplimentsUserCase";





class CreateComplimentController{

    async handle(request: Request, response: Response){
        const { tag_id, user_receiver, message  } = request.body
        const { user_id } = request
       
        const complimentUseCase = new CreateComplimentsUseCase() 

        const compliment = await complimentUseCase.execute({tag_id, user_sender: user_id, user_receiver, message})

        return response.status(201).json(compliment)
    }

}

export { CreateComplimentController }