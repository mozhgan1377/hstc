import { Router } from "express";
import { authController } from "@modules/auth/auth.controller";

const router = Router();

router.post("/auth/register", authController.register);

export default router;
