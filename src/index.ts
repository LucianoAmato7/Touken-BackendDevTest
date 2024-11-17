import express from 'express';
import RouterCampaings from "./routes/campaings.routes";
import routeNotFound from "./middlewares/routeNotFound";
import authenticateUser from "./middlewares/user.auth";

const app = express();

const PORT = 3000;

// Se aplica un middleware para verificar si el usuario está autenticado y recuperar su información, 
// como por ejemplo su ID, que se utilizará en las consultas posteriores.
app.use("/home/campaings",authenticateUser, RouterCampaings);

//Middleware para rutas no implementadas.
app.use("*", routeNotFound);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.on("error", (error) => {
console.log(`Error in Server: ${error}`);
});