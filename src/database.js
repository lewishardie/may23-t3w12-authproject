const mongoose = require('mongoose');

async function databaseConnect(){
    try {
        console.log("Connecting to: " + process.env.DB_URI )
        await mongoose.connect(process.env.DB_URI);
        console.log("Database Connected")
    } catch(error) {
        console.warn(`databaseConnect failed to connect to DB ${JSON.stringify(error)}`)
    }
};

module.exports = {
    databaseConnect
}