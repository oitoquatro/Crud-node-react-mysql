import express from "express";
import userRoutes from "./routes/users.js";
import cors from "cors";

const app = express();

app.use(express.json()); //para ler os arquivos de POST e PUTCH em JSON
app.use(cors());  // Para evitar conflitos

app.use("/", userRoutes);

app.listen(8800);  // Para o app rodar na porta 8800