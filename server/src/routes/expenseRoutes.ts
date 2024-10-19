import { Router } from "express";
import { getExpenseByCategory } from "../controllers/expenseCntroller";

const router = Router();

router.get("/", getExpenseByCategory);

export default router;