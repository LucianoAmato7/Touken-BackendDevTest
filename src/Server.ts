import express from 'express';
import RouterCampaings from "./routes/campaings.routes";
import routeNotFound from "./middlewares/routeNotFound";

const app = express();

const PORT = 3000;

app.use("/home/campaings", RouterCampaings);

//Middleware para rutas no implementadas.
app.use("*", routeNotFound);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.on("error", (error) => {
console.log(`Error in Server: ${error}`);
});