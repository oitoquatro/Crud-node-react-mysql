import mysql from "mysql"

export const db = mysql.createConnection({
  host: "localhost", 
  user: "root",
  password: "junior",  //senha do usuario
  database: "crud",  // nome do banco a ser utilizado
});