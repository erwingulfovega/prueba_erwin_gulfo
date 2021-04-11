const RecursoCtrl = {};

const Recurso = require('../models/Recurso');

RecursoCtrl.getRecursos    = async (req, res) => {
		const recursos   = await Recurso.find();
		res.json(recursos);
}

RecursoCtrl.createRecursos = async (req, res) => {

	const { titulo, claves, descripcion, tipo, cobertura } = req.body;
	
	const newRecurso = new Recurso({
		titulo     : titulo,
        tipo       : tipo,
        claves     : claves,
        descripcion: descripcion,
        cobertura  : cobertura
	})
	await newRecurso.save();
	console.log(newRecurso)
	res.json({ message: "Recurso documental guardado"})
}

RecursoCtrl.getRecurso     = async (req, res) => {
	const recurso = await Recurso.findById(req.params.id);
	res.json(recurso)
}

RecursoCtrl.updateRecursos = async (req, res) => {
    const { titulo, claves, descripcion, tipo, cobertura } = req.body;
	await Recurso.findOneAndUpdate({_id: req.params.id}, {
		titulo     : titulo,
        tipo       : tipo,
        claves     : claves,
        descripcion: descripcion,
        cobertura  : cobertura
	})
	res.json({ message: "Recurso documental actualizado"})
}

RecursoCtrl.deleteRecursos = async (req, res) => {
	await Recurso.findByIdAndDelete(req.params.id);
	res.json({ message: "Recurso documental eliminado"})
}

module.exports = RecursoCtrl;