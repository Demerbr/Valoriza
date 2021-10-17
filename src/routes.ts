import { response, Router } from "express"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController"
import { CreateComplimentController } from "./controllers/CreateComplimentController"
import { CreateTagController } from "./controllers/CreatetagController"
import { CreateUserController } from "./controllers/CreateUserController"
import { ListTagController } from "./controllers/ListTagConstroller"
import { ListUserController } from "./controllers/ListUserController"
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController"
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController"
import { ensureAdmin } from "./middiewares/ensureAdmin"
import { ensureAuthenticated } from "./middiewares/ensureAuthenticated"
import { ListUserReceiveComplimentsUseCase } from "./useCases/ComplimentsUseCase/ListUserReceiveComplimentsUseCase"

const userRouter = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const complimentController = new CreateComplimentController()
const listUserSendComplimentsConttroller = new ListUserSendComplimentsController()
const listUserReceiveComplimentsConttroller = new ListUserReceiveComplimentsController()
const listTagController = new ListTagController()
const listUserController = new ListUserController()


userRouter.post("/users", createUserController.handle)

userRouter.post("/tags", ensureAuthenticated , ensureAdmin , createTagController.handle)

userRouter.post("/login", authenticateUserController.handle)

userRouter.post("/compliments", ensureAuthenticated , complimentController.handle)

userRouter.get("/users/compliments/send",ensureAuthenticated, listUserSendComplimentsConttroller.handle)

userRouter.get("/users/compliments/receive",ensureAuthenticated, listUserReceiveComplimentsConttroller.handle)

userRouter.get("/tags",ensureAuthenticated, listTagController.handle)

userRouter.get("/users", ensureAuthenticated, listUserController.handle)

export{ userRouter }