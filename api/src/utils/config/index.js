require ('dotenv').config();

module.exports = {
    mongoUser : process.env.USER_MONGODB,
    mongoPass : process.env.PASS_MONGODB,
    PORT : process.env.PORT,
    mongoDbName: process.env.NAME_MONGODB
}