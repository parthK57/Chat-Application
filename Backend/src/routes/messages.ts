import { Router } from "express";

const router = Router();

// Controllers
import {sendMessageHandler} from "../controllers/messages";
import PasswordVerifier from "../Services/PasswordVerifier";

router.post("/message/sendmessage", PasswordVerifier, sendMessageHandler);

export default router;