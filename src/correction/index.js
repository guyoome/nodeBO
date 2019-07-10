const express = require('express')
const mongoose = require('mongoose')
const userModel = require('./schema')
const secureInput = require('./secureInput')
const authorizeIfEnoughtUsers = require('./authorizeIfEnoughtUsers')

const app = express()




/**
 * C'est un middleware qui permet de récupérer le body d'une requête POST
 * envoyant du "application/json" et de remplir l'objet req.body
 * 
 * Par exemple si tu envoies via ta requête :
 * {
 *      "username": "Toto",
 *      "password": "passw0rd"
 * } 
 * 
 * Tu obtiendras les champs en appelant:
 * - req.body.username => "Toto"
 * - req.body.password => "passw0rd"
 */
app.use(express.json())

module.exports = {


}

/**
 * Routes
 */
app.get('/users', authorizeIfEnoughtUsers, async (req, res) => {
    try {
        const users = await userModel.find().exec();
        res.json(users);
    } catch (error) {
        console.log('error');
    }
}).post('/users', secureInput, (req, res) => {

    // try {
    //     const userCreated = await userModel.create(req.body);
    //     res.json(userCreated);
    // } catch (error) {
    //     console.log('error');
    // }

    userModel.create(req.body, (err, userCreated) => {
        if (err) console.log(err);
        res.json(userCreated);
    });
});



// Connection à la base de données MongoDB
const a = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/webapp-example', { useNewUrlParser: true })
        console.log('Connected to MongoDB (db: webapp-example)')

    } catch (error) {
        console.log('error');
    }

    // console.log('Connected')
}

a();


// L'application écoute les requêtes sur le port 3000
app.listen(3000, () => {
    console.log('App listening on port 3000')
})