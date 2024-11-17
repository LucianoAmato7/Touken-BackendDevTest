import { Router } from "express";
import {listCampaigns_controller} from "../controllers/campaings.controller";

const router = Router();

router.get("/", listCampaigns_controller)

//Ver si agragar otra con id

export default router;

