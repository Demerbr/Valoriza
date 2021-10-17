import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../../repositories/UserRepository"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"


interface IAuthenticateRequest{
    
    email: string,
    password: string,
}


class AuthenticateUserUseCase {

    async execute({ email, password }: IAuthenticateRequest){

        const usersRepository = getCustomRepository(UsersRepository)

        //verificar se emial existe

        const user = await usersRepository.findOne({
            email
        })

        if(!user){
            throw new Error("Email/Password incorrect")
        }
        // verificar se senha está correta

        const passwordMatch = await compare(password, user.password)

        if (! passwordMatch){
            throw new Error("Email/Password incorrect");
            
        }

        //gerar token

        const token = sign({
            email: user.email
        }, "ae002061b65604f6abb01fc35dc27525",{ 
            subject: user.id,
            expiresIn: "1d"
        })

        

        return token
    }

}


export { AuthenticateUserUseCase }