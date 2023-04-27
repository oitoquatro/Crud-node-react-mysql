import express from "express";
import { getUsers } from "../controllers/user.js";

const router = express.Router() ; //Indica que é uma rota

router.get("/", getUsers);  //atribuindo e metodo get com o parametro barra echamando a função getUsers da pasta controller

export default router;