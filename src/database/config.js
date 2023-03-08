const url =
  process.env.NODE_ENV === "dev"
    ? "mongodb://localhost:27017/access-control"
    : "mongodb://db:27017/access-control";

module.exports = {
  uri: url,
};
