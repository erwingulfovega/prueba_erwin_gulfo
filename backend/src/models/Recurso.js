const { Schema, model } = require('mongoose');

const RecursoSchema = new Schema({
	titulo      : {
		type    : String,
		required: true
	},
	claves      : {
		type    : String,
		required: true
	},
	descripcion : {
		type    : String,
		required: true
	},
    tipo        : {
		type    : String,
		required: true
	},
    cobertura   : {
		fecha_inicial: Date,
		fecha_final: Date,
		ciudad: String,
		geopoint: Object
	}
},{
	timestamps: true 
})

module.exports = model('Recurso', RecursoSchema);