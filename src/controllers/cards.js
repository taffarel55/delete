const Error = require("../utils/error");
const { Card } = require("../database/models");

const create = async (req, res, next) => {
  try {
    const card = new Card(req.body);
    await card.validate();
    await card.save();

    res.status(201).json(card);
  } catch (error) {
    next({ status: 400, message: error.message });
  }
};

const read = async (req, res, next) => {
  try {
    const card = await Card.findOne({ id: req.params.id });
    if (!card) {
      throw new Error(404, "Cartão não encontrado");
    }
    res.status(200).json(card);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "permissions"];
  const isValidUpdate = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidUpdate) {
    throw new Error(400, "Atualizações inválidas");
  }

  try {
    const card = await Card.findOne({ id: req.params.id });

    if (!card) {
      throw new Error(404, "Cartão não encontrado");
    }

    updates.forEach((update) => (card[update] = req.body[update]));
    await card.save();
    res.status(200).json(card);
  } catch (error) {
    next(error);
  }
};

const del = async (req, res, next) => {
  try {
    const card = await Card.findOneAndDelete({ id: req.params.id });

    if (!card) {
      throw new Error(404, "Cartão não encontrado");
    }

    res.status(200).json(card);
  } catch (error) {
    next(error);
  }
};

module.exports = { create, read, update, del };
