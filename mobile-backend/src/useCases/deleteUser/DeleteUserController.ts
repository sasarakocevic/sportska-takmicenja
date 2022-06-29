import { Request, Response } from "express";
import { DeleteUser } from "./DeleteUser";

class DeleteUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const deleteUser = new DeleteUser();

    try {
      await deleteUser.execute(id);

      return res.status(204).end();
    } catch (error) {
      
    }
  }
}

export { DeleteUserController }
