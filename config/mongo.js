const mongoose = require('mongoose');

const dbConnect = () => {

    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI)
    .then(() => console.log('Conexión exitosa a la base de datos'))
    .catch(err => {
        if (err) {
            console.log('Error de conexión a la base de datos');
            return;
        }
    });
}


module.exports = { dbConnect };