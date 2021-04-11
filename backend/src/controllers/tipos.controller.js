const tipoCtrl = {};

const Tipo = require('../models/Tipo');

tipoCtrl.getTipos    = async (req, res) => {
		const tipos   = await Tipo.find();
		res.json(tipos);
}

tipoCtrl.createTipos = async (req, res) => {
	const {tipo, nombre} = req.body;
	
	const newTipo = new Tipo({
		tipo: tipo,
        nombre: nombre
	})
	await newTipo.save();
	console.log(newTipo)
	res.json({ message: "Tipo de recurso guardado"})
}

tipoCtrl.getTipo     = async (req, res) => {
	const tipo = await Tipo.findById(req.params.id);
	res.json(tipo)
}

tipoCtrl.updateTipos = async (req, res) => {
    const { tipo, nombre } = req.body;
	await Tipo.findOneAndUpdate({_id: req.params.id}, {
		nombre: nombre
	})
	res.json({ message: "Tipo de recurso actualizado"})
}

tipoCtrl.deleteTipos = async (req, res) => {
	await Tipo.findByIdAndDelete(req.params.id);
	res.json({ message: "Tipo de recurso eliminado"})
}

module.exports = tipoCtrl;