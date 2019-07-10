
Made by tom, Github : tomguillermou

# I/ Exercice Promise & Callback
# Modifier la connection Mongoose
Modifier la connection Mongoose à la base de données pour utiliser le principe async/await.
Il faut toujours afficher l'erreur s'il y en a une !

# II/ Les bases d'une application Node.js
# Installer les packages Node requis
Pour installer les packages requis (Express pour l'application et Mongoose l'ORM) utilise la commande :
```sh
$ npm install
```

# Présentation
Pour l'instant cet exemple de base montre une application Web qui écoute le port 3000 (accessible via l'adresse "GET localhost:3000"). Par conséquent, si tu crées une route "GET /users" elle sera accessible via "GET localhost:3000/users". Cette application se connecte automatiquement à MongoDB.

# Lancer l'application
Pour lancer l'application utilise la commande :
```sh
$ npm start
```

# Créer la première route
1) Créer une route "GET /users" qui renvoie l'objet JSON:
{
    "users": []
}

Doc(s):
- https://expressjs.com/fr/guide/routing.html

# Utiliser l'ORM Mongoose
2) Créer le schema d'un utilisateur avec les champs suivants:
- username (String, requis)
- password (String, requis)
- age (Number, requis)

Doc(s):
- https://mongoosejs.com/docs/guide.html

# Création des utilisateurs
3) Créer la route "POST /users" qui permet de créer un utilisateur
La route doit renvoyer en format JSON le document créé dans la base de données !

Doc(s):
- https://mongoosejs.com/docs/models.html 

# Récupérer la liste des utilisateurs
4) Modifier la route "GET /users" pour qu'elle renvoie la liste des utilisateurs de la base de données en format JSON.

Doc(s):
- https://mongoosejs.com/docs/queries.html

# Créer un middleware
5) Créer un middleware avant la route "GET /users" qui vérifie si il y a au moins 3 utilisateurs dans la base de données.

Doc(s):
- https://expressjs.com/fr/guide/writing-middleware.html
