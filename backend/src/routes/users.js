const { Router } = require('express');
const router = Router();

const { getUsers, getUser, createUsers, updateUsers, deleteUsers } = require('../controllers/users.controller')

router.route('/')
	.get(getUsers)
	.post(createUsers)

router.route('/:id')
	.get(getUser)
	.put(updateUsers)
	.delete(deleteUsers);

module.exports = router;