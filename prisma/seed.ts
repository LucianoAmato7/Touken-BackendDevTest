import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const tribe1 = await prisma.tribes.create({
    data: {
      name: "Tribe Alpha",
      description: "Description for Tribe Alpha",
    },
  });

  const user1 = await prisma.users.create({
    data: {
      name: "John Doe",
      email: "john.doe@example.com",
      password: "securepassword",
      role: "admin",
      tribeId: tribe1.id,
    },
  });

  const campaign1 = await prisma.campaigns.create({
    data: {
      name: "Campaign One",
      status: "active",
      userOwnerId: user1.id,
    },
  });

  const question1 = await prisma.questions.create({
    data: {
      description: "What is your opinion?",
      campaignId: campaign1.id,
    },
  });

  const audience1 = await prisma.audiences.create({
    data: {
      title: "Audience One",
    },
  });

  await prisma.userAudiences.create({
    data: {
      userId: user1.id,
      audienceId: audience1.id,
      roleInAudience: "member",
    },
  });

  await prisma.responses.create({
    data: {
      questionId: question1.id,
      userId: user1.id,
      description: "I think it's great!",
    },
  });

  const tribe2 = await prisma.tribes.create({
    data: {
      name: "Tribe Beta",
      description: "Description for Tribe Beta",
    },
  });

  const user2 = await prisma.users.create({
    data: {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      password: "securepassword",
      role: "client",
      tribeId: tribe2.id,
    },
  });

  await prisma.responses.create({
    data: {
      questionId: question1.id,
      userId: user2.id,
      description: "I think it's something absolutely amazing!",
    },
  });

  const campaign2 = await prisma.campaigns.create({
    data: {
      name: "Campaign Two",
      status: "inactive",
      userOwnerId: user2.id,
    },
  });

  const question2 = await prisma.questions.create({
    data: {
      description: "How can we improve?",
      campaignId: campaign2.id,
    },
  });

  const audience2 = await prisma.audiences.create({
    data: {
      title: "Audience Two",
    },
  });

  await prisma.userAudiences.create({
    data: {
      userId: user2.id,
      audienceId: audience2.id,
      roleInAudience: "viewer",
    },
  });

  await prisma.responses.create({
    data: {
      questionId: question2.id,
      userId: user2.id,
      description: "You can improve by focusing on user feedback.",
    },
  });

  console.log("Datos insertados correctamente");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
