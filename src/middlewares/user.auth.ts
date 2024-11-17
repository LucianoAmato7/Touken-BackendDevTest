import { Request, Response, NextFunction } from 'express';

// Simulación de usuario ya autenticado (como si fuera un usuario en sesión)
const authenticatedUser = {
  id: 1,
  name: "Jane Smith",
  email: "jane.smith@example.com",
  role: "client",
  tribeId: 2,
};

const authenticateUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    // Verificar si el usuario está autenticado (en este caso, siempre está)
    if (!authenticatedUser) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = authenticatedUser.id;
    next();
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

export default authenticateUser;
