import { db } from "../db.js"; // importando o banco

export const getUsers = (_, res) => {
  const q = "SELECT * FROM new_table"; //selecionando todos os itens da tabela
  
  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};