import { DataSource } from "typeorm";
import { Users } from "./entities/Users";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "ponto-eletronico",
  entities: [Users],
  synchronize: true,
});
