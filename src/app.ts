import express from "express";
import userRoutes from "./routes/user.routes";
import loginRoutes from "./routes/login.routes";
import registerRoutes from "./routes/register-hour.routes";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRoutes);
app.use(loginRoutes);
app.use(registerRoutes);

export default app;
