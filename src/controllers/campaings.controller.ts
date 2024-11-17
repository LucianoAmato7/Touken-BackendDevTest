import { Request, Response } from "express";
import CampaignsService from "../services/campaings.services";

export const listCampaigns_controller = async (req: Request, res: Response) => {

    try {
        //recuperar id de la persona logeada
        //ver si enviar el id por parametros de tura o que lo saque de la logica (middleware) de autenticacion.
        const userId = 1;
        const campaigns = await CampaignsService.listCampaigns_Services(userId);
        res.json(campaigns);
    } catch (error) {
        console.log(`Error in Controller of Campaings | ${error}`);
        res.status(400).json({ error });
    }
};