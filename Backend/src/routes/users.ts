import { Router } from "express";

const router = Router();

// Controllers
import {signUpHandler} from "../controllers/users";

// Routing
router.use("/users/register", signUpHandler);

export default router;