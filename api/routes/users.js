import express from "express";
import { getUsers, addUser, updateUser, deleteUser } from "../controllers/user.js";

const router = express.Router(); //Indica que é uma rota

router.get("/", getUsers);  //atribuindo e metodo get com o parametro barra e chamando a função getUsers da pasta controller
router.post("/", addUser)

router.put("/:id", updateUser)

router.delete("/:id", deleteUser)

export default router;