require('dotenv').config()

const app = require('./src/app');
const server = require('./src/websocket');
const { PORT, WSPORT } = require('./src/common');

const connectToDatabase = require('./src/mongo');

connectToDatabase()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is listening at ${PORT}`);
        })
        server.listen(WSPORT, () => {
            console.log(`WebSocket Server is listening at ${ WSPORT }`);
        });
    })
    .catch(error => {
        console.error('Failed to connect to MongoDB:', error);
        throw error;
    });