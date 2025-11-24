import * as dotenv from "dotenv";
import { defineConfig } from "@mikro-orm/postgresql";
import { User } from "../auth/entites/user.entity";
import { Table } from "../auth/entites/base.entity";

dotenv.config();

export default defineConfig({
  clientUrl:
    process.env.DATABASE_URL ||
    "postgresql://postgres:root@localhost:5432/learn",
  entities: [User, Table],
  debug: false,
  allowGlobalContext: true,
  pool: {
    min: 2,
    max: 10,
  },
  driverOptions: {
    connection: {
      connectTimeoutMS: 30000,
      socketTimeoutMS: 30000,
      ssl: process.env.NODE_ENV === 'production' || process.env.DATABASE_URL?.includes('neon.tech')
        ? { rejectUnauthorized: false }
        : false,
    },
  },
  seeder: {
    path: "./src/config",
    defaultSeeder: "Seed", // Default seeder class name
  },
});
