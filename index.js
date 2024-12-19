require('dotenv').config();
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log('Conectado ao MongoDB Atlas!'))
  .catch(err => console.error('Erro ao conectar ao MongoDB Atlas:', err));

const app = require('express')();

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
