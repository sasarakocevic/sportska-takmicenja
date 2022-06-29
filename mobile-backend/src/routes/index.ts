import { Router } from "express";
import { usersRoutes } from "./users.routes";

import { matchesRoutes } from "./matches.routes";
import { rankingRoutes } from "./ranking.routes";

const routes = Router();


routes.use("/users", usersRoutes)
routes.use("/matches", matchesRoutes)
routes.use("/ranking", rankingRoutes)

export { routes };

