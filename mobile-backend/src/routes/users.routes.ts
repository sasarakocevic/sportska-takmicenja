import { Router } from "express";
import { CreateUserController } from "../useCases/createUser/CreateUserController";
import { DeleteUserController } from "../useCases/deleteUser/DeleteUserController";
import { GetAllUsersController } from "../useCases/getAllUsers/GetAllUsersController";
import { GetUserInfoController } from "../useCases/getUserInfo/GetUserInfoController";

const router = Router();

const getAllUsersController = new GetAllUsersController();
const getUserInfoController = new GetUserInfoController();
const createUserController = new CreateUserController();
const deleteUserController = new DeleteUserController();

router.get("/", getAllUsersController.handle);
router.get("/info/:userId", getUserInfoController.handle);
router.post("/", createUserController.handle);
router.delete("/:id", deleteUserController.handle);

export { router as usersRoutes };
