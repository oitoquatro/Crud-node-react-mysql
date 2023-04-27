import { db } from "../db.js"; // importando o banco

export const getUsers = (_, res) => {
  const q = "SELECT * FROM new_table"; //selecionando todos os itens da tabela
  // Select from serve para selecionar o dado  e * os dados
  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q = "INSERT INTO usuarios(`nome`, `email`, `fone`, `data_nascimento`) VALUES(?)";
// Insert into serve para adicionar o dado na tabela
  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário cadastrado com sucesso!");
  });
};