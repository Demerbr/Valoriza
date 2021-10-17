import { NextFunction, request, Request, response, Response } from "express";
import { verify } from "jsonwebtoken"


interface IPayLoad{
    sub: string;
}



export function ensureAuthenticated ( request: Request, response: Response, next: NextFunction) {


    //receber token
    const authToken = request.headers.authorization;


    //validar se token esta preenchido

    if(! authToken){
        return response.status(401).end()
    }

    //validar se token é valido

    const [, token] = authToken.split(" ")


    try{


        //recuperar informações do usuario
        const { sub } = verify(token,"ae002061b65604f6abb01fc35dc27525") as IPayLoad

        request.user_id = sub
        
        return next()
        
    }catch{
        return response.status(401).end()
    }

    
    
    
}