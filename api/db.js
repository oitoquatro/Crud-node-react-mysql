import mysql from "mysql"

export const db = mysql.createConnection({
  host: "localhost", 
  user: "root",
  password: "junior",  //senha do usuario
  dabase: "crud"  // nome do banco a ser utilizado
})