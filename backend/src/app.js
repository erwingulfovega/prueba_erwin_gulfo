const express = require('express');
const cors    = require('cors');
const app     = express();


//settings
app.set('port', process.env.MONGODB_PORT || 4000);
app.set('url', process.env.MONGODB_URL);

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use('/api/users', require('./routes/users'))
app.use('/api/notes', require('./routes/notes'))
app.use('/api/recursos', require('./routes/recursos'))
app.use('/api/tipos', require('./routes/tipos'))

module.exports= app; 