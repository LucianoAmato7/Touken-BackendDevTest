// express.d.ts
import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: number; // Or define a more specific type for user
    }
  }
}


// import { Users } from "@prisma/client";

// declare global {
//   namespace Express {
//     interface Request {
//       user?: number;
//     }
//   }
// }

// import * as express from 'express';

// declare global {
//   namespace Express {
//     interface Request {
//       user?: number
//     }
//   }
// }