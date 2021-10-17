import { Request, Response } from "express";
import { ListUserSendComplimentsUseCase } from "../useCases/ComplimentsUseCase/ListUserSendComplimentsUseCase";




class ListUserSendComplimentsController {

    async handle(request: Request, response: Response){
        const{ user_id } = request

        const ListUserRSendCompliments = new ListUserSendComplimentsUseCase()

        const compliments = await ListUserRSendCompliments.execute(user_id)

        return response.status(200).json({compliments})

    }

}


export { ListUserSendComplimentsController }