const express = require('express')
const mongoose = require('mongoose')

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

/**
 * Routes
 */

// Connection à la base de données MongoDB


// L'application écoute les requêtes sur le port 3000
app.listen(3000, () => {
    console.log('App listening on port 3000')
})