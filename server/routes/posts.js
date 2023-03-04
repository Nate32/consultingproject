import express  from "express";

import { getPost, submitSurvey } from "../constrollers/posts.js";

const router = express.Router();

router.get('/', getPost);
router.get('/', submitSurvey);

export default router; 