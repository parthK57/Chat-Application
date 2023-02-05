import { Router } from "express";

const router = Router();

// Controllers
import {signUpHandler} from "../controllers/users";

// Routing
router.use("/register", signUpHandler);

export default router;