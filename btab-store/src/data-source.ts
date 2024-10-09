import { DataSource } from "typeorm";
import { Vendor } from "./models/vendor"; // Ensure this points to your Vendor model

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "woini",
  database: "mydatabase",
  entities: [Vendor], // Add all necessary entities here
  migrations: ["src/migrations/**/*.ts"],
});
