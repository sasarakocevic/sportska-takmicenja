import { Router } from "express";
import { DeleteUserController } from "../useCases/deleteUser/DeleteUserController";
import { GetPodiumController } from "../useCases/getPodium/GetPodiumController";
import { ShowRankingController } from "../useCases/showRanking/ShowRankingController";
import { UpdateRankingController } from "../useCases/updateRanking/UpdateRankingController";

const router = Router();

const showRankingController = new ShowRankingController();
const getPodiumController = new GetPodiumController();
const updateRankingController = new UpdateRankingController();
const deleteUserController = new DeleteUserController();

router.get("/", showRankingController.handle);
router.get("/podium", getPodiumController.handle);
router.put("/", updateRankingController.handle);
router.delete("/:id", deleteUserController.handle);

export { router as rankingRoutes }
