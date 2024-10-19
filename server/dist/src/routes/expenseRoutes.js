"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const expenseCntroller_1 = require("../controllers/expenseCntroller");
const router = (0, express_1.Router)();
router.get("/", expenseCntroller_1.getExpenseByCategory);
exports.default = router;
