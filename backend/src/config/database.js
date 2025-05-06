const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://piergp:admin1234@cluster0.5gmdw.mongodb.net/taskPlaner?retryWrites=true&w=majority&appName=Cluster0');
        console.log('Conexión a la base de datos establecida correctamente');
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
        process.exit(1);
    }
};

module.exports = connectDB; 