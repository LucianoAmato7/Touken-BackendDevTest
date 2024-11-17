import { Users } from "@prisma/client";

declare global {
  namespace Express {
    interface Request {
      user?: number;
    }
  }
}

// import * as express from 'express';

// declare global {
//   namespace Express {
//     interface Request {
//       user?: number
//     }
//   }
// }