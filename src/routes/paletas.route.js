const express = require('express');
const router = express.Router();
const {
  validId,
  validObjectBody,
} = require('../middlewares/paleta.middleware');

const paletasController = require('../controllers/paletas.controller');

// Rota para listar todas as paletas
router.get('/all-paletas', paletasController.findPaletasController);

// Rota para lista uma palea pelo seu ID
router.get(
  '/one-paleta/:id',
  validId,
  paletasController.findPaletaByIdController,
);

// Rota para criar uma paleta
router.post(
  '/create-paleta',
  validObjectBody,
  paletasController.createPaletaController,
);

// Usaremos o PUT para atualizar todo o recurso, o PATCH pode ser usado para atualizar partes de um registro
router.put(
  '/update-paleta/:id',
  validId,
  validObjectBody,
  paletasController.updatePaletaController,
);

// Rota para deletar uma paleta pelo seu ID
router.delete(
  '/delete-paleta/:id',
  validId,
  paletasController.deletePaletaController,
);

module.exports = router;
