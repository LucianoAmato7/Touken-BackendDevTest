import { Request, Response } from "express";

const routeNotFound = (req: Request, res: Response): void => {
  console.error(`Route "${req.originalUrl}" not found.`);
  res.status(404).send({
    error: -2,
    description: `route ${req.originalUrl} method ${req.method} not found.`,
  });
};

export default routeNotFound;
