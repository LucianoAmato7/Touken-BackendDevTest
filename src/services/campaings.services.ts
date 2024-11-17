import CampaingsDAO from '../dao/campaings.dao';

class CampaignsService {
  private campaingsDAO = CampaingsDAO;

  async listCampaigns_Services(userId: number) {
    if (!userId) {
      throw new Error("User ID is required");
    }
    const campaigns = await this.campaingsDAO.ListCampaings_DAO(userId);
    return campaigns;
  }
}

export default new CampaignsService();