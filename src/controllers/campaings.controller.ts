import { Request, Response } from "express";
import CampaignsService from "../services/campaings.services";

export const listCampaigns_controller = async (req: Request, res: Response) => {

    try {
        // El usuario autenticado se encuentra en req.user (ver middleware user.auth.ts)
        const userId = req.user;
        if (typeof userId !== 'number') {
            return res.status(401).json({ error: "User ID is missing or invalid" });
          }
        const campaigns = await CampaignsService.listCampaigns_Services(userId);
        res.json(campaigns);
    } catch (error) {
        console.log(`Error in Controller of Campaings | ${error}`);
        res.status(500).json({ error });
    }
};