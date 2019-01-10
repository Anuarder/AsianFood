const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: String,
        email: String,
        password: String,
        image: String,
        favorites: [String]
    },
    {
        collection: 'Users'
    },
    {
        versionKey: false
    }
);

module.exports = mongoose.model('User', userSchema);