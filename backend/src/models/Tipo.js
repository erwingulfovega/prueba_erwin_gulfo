const { Schema, model } = require('mongoose');

const TipoSchema = new Schema({
	tipo    : {
		type    : String,
		required: true,
		trim    : true,
		unique  : true,
	},
    nombre      : {
		type    : String,
		required: true
	}
},{
	timestamps: true 
})

module.exports = model('Tipo', TipoSchema);