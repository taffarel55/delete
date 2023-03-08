const Error = require("../utils/error");

const authenticate = (req, res, next) => {
  if (req.query.token === "mauricio") {
    next();
  } else {
    throw new Error(401, "Senha incorreta");
  }
};

const error = (err, req, res, next) => {
  if (!err) new Error();
  return res.status(err.status).json(err);
};

module.exports = { authenticate, error };
