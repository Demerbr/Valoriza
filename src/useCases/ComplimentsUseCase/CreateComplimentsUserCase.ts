import { getCustomRepository } from "typeorm"
import { ComplimentsRepository } from "../../repositories/ComplimentsRepository"
import { UsersRepository } from "../../repositories/UserRepository"


interface IComplimentRequest{
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}



class CreateComplimentsUseCase {
    
    async execute({ tag_id, user_sender, user_receiver, message }: IComplimentRequest){
        
     const complimentsRepositories = getCustomRepository(ComplimentsRepository)
    
     const userRepositories = getCustomRepository(UsersRepository)

     if(user_sender === user_receiver){
         throw new Error("Incorrect User Receiver");
         
     }

    const userReceiverExists = await userRepositories.findOne(user_receiver);

    if(!userReceiverExists){
         throw new Error("User Receiver does not exists!");
     }

     const compliment = complimentsRepositories.create({
         tag_id,
         user_sender,
         user_receiver,
         message
     })

     await complimentsRepositories.save(compliment)

     return compliment

     

}




}

export { CreateComplimentsUseCase }