const { Router } = require('express');
const router = Router();

const { getTipos, getTipo, createTipos, updateTipos, deleteTipos } = require('../controllers/tipos.controller')

router.route('/')
	  .get(getTipos)
	  .post(createTipos)

router.route('/:id')
	  .get(getTipo)
	  .put(updateTipos)
	  .delete(deleteTipos);

module.exports = router;