const axios = require("axios");
require('dotenv').config();

const URL = process.env.API_URL;
const STATUS_OK = 200;
const STATUS_ERROR = 500;

const EMAIL_USER = process.env.EMAIL;
const PASSWORD_USER = process.env.PASSWORD;

const login = function (req, res) {
  const { password, email } = req.query;
  if (!password || !email) {

    return res.status(STATUS_ERROR).json({ access: false });
  }
  if (password === PASSWORD_USER && email === EMAIL_USER) {
    res.status(STATUS_OK).json({ access: true });
  } else {
    
    res.status(STATUS_OK).json({ access: false });
  }
};


const getCharacterId = async function (req, res) {
  
  try {
    const { id } = req.params;
    const ch = await axios.get(`${URL}/${id}`);
    const { name, gender, species, origin, image, status } = ch.data;
    const character = {
      id,
      name,
      gender,
      species,
      origin: origin?.name,
      image,
      status,
    };
    res.status(STATUS_OK).json(character);
  } catch (error) {
    
    res.status(STATUS_ERROR).end(error.message);
  }
};


const getAllCharacters = async function (req, res) {
  try {
    const characters = await axios.get(`${URL}?page=1`);
    res.status(STATUS_OK).json(characters.data.results);
  } catch (error) {
   
    res.status(STATUS_ERROR).end(error.message);
  }
};

module.exports = {
  getCharacterId,
  login,
  getAllCharacters,
};
