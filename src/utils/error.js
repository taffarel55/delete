class Error {
  constructor(status, message) {
    this.status = status ?? 500;
    this.message = message ?? "Algo de errado não está certo!";
  }
}

module.exports = Error;
