import { Application } from "express";
import vendorRouter from "./routes/vendor";

// Export a function that takes `app` as a parameter
export default function registerRoutes(app: Application): void {
  app.use("/store", vendorRouter); // Or "/admin" depending on the API scope
}
