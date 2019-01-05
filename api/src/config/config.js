module.exports = {
    port: process.env.PORT || 8081,
    database_url: "mongodb://localhost/AsianFood",
    secret: process.env.SECRET ||'secret'
}