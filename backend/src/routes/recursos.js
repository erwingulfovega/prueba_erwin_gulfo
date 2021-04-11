const { Router } = require('express');
const router = Router();

const { getRecursos, getRecurso, createRecursos, updateRecursos, deleteRecursos } = require('../controllers/recursos.controller')

router.route('/')
	  .get(getRecursos)
	  .post(createRecursos)

router.route('/:id')
	  .get(getRecurso)
	  .put(updateRecursos)
	  .delete(deleteRecursos);

module.exports = router;