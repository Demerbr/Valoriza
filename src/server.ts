import express, { NextFunction, Request, Response } from "express"
import "reflect-metadata"
import "express-async-errors"

import "./database"
import { userRouter } from "./routes"

const app = express()

app.use(express.json())

app.use(userRouter)

app.use((err: Error, request: Request, response: Response, next: NextFunction)=>{

    if(err instanceof Error){
        response.status(400).json( {error: err.message} )
    }

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
     })
})

console.log("ok")


app.listen(4444, ()=> console.log("Server is Runing")) 