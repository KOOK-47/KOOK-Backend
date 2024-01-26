import express from "express"
import { getRoles } from '../controllers/lookup.controller.js';
const lookupRouter = express.Router();
lookupRouter.get('/roles', getRoles);
export default lookupRouter;
