import { Request, Response } from "express";
import { ListUserReceiveComplimentsUseCase } from "../useCases/ComplimentsUseCase/ListUserReceiveComplimentsUseCase";




class ListUserReceiveComplimentsController {

    async handle(request: Request, response: Response){
        const{ user_id } = request

        const ListUserReceiverCompliments = new ListUserReceiveComplimentsUseCase()

        const compliments = await ListUserReceiverCompliments.execute(user_id)

        return response.status(200).json({compliments})

    }

}


export { ListUserReceiveComplimentsController }