import { PrismaClient } from "@prisma/client";

class CampaingsDAO {
    private db: PrismaClient;

    constructor() {
      this.db = new PrismaClient();
    }

  async ListCampaings_DAO(userId: number) {
    try {
      const campaigns = await this.db.campaigns.findMany({
        where: {
          userOwnerId: userId,
        },
      });
      return campaigns;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
          } else {
            throw new Error('Unknown error occurred');
        }
    }
  }
}

export default new CampaingsDAO();