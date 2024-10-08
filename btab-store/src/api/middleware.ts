import type {
    MiddlewaresConfig,
    MedusaRequest,
    MedusaResponse,
    MedusaNextFunction,
  } from "@medusajs/medusa";
  
  async function logger(
    req: MedusaRequest,
    res: MedusaResponse,
    next: MedusaNextFunction
  ) {
    console.log("Vendor route accessed:", req.path);
    next();
  }
  
  export const config: MiddlewaresConfig = {
    routes: [
      {
        matcher: "/vendors",
        middlewares: [logger],
      },
    ],
  };
  