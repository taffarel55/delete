const Error = require("../utils/error");

const main = (req, res) => {
  res.json({ message: "Funcionando" });
};

const error = (req, res) => {
  throw new Error(404, "Não encontrado");
};

module.exports = { main, error };
