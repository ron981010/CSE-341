const express = require('express');
const router = express.Router();
const { getDb, initDb } = require('../db/connect');

// Inicializar la base de datos antes de usarla
initDb((err) => {
  if (err) {
    console.error('Error initializing database:', err);
    // Manejar el error de inicialización de la base de datos
  } else {
    // Configurar las rutas y controladores que utilizan la base de datos
    const contactsController = require('../controllers/contacts');

    router.get('/', contactsController.getAll);

    router.get('/:id', contactsController.getSingle);

    // ...
  }
});

module.exports = router;