/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  },

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/
// Permet de récupérer tous les trajets 
'GET /trajets' : {
    controller: 'TrajetController',
    action: 'getAllTrajet'
},

// Permet de récupérer un trajet à l'aide de la ville de départ, ville d'arrivée et de la date de départ passé par la query string
'GET /trajet' : {
   controller: 'TrajetController',
   action: 'getTrajet'
},
   
// Permet de récupérer un trajet par son id 
'GET /trajetById' : {
   controller: 'TrajetController',
   action: 'getTrajetById'
},

// Permet d'ajouter un trajet
'POST /trajet' : {
   controller: 'TrajetController',
   action: 'createTrajet'
},

// Permet de supprimer un trajet
'DELETE /trajet' : {
    controller: 'TrajetController',
    action: 'deleteTrajet'
},

// Permet à un utilisateur de se connecter en passant son mail et mot de passe
'GET /user/:mail/:password' : {
    controller: 'UserController',
    action: 'authentificationUser'
},

// Permet d'ajouter un utilisateur
'POST /user' : { 
    controller: 'UserController',
    action: 'createUser'
},

// Permet de modifier le profil de l'utilisateur
'PUT /user/:idUser' : {
    controller: 'UserController',
    action: 'modifyUser'
},

// Permet de supprimer le profil d'un utilisateur
'DELETE /user' : {
    controller: 'UserController',
    action: 'deleteUser'
},

// Permet à un utilisateur de se positionner sur un trajet
'PUT /user/:idUser/subscribeTrajet/trajet/:idTrajet' : {
    controller : 'UserController',
    action : 'positionOnTrajet'
},

// Permet à un utilisateur de se désincrire d'un trajet
'PUT /user/:idUser/unsubscribeTrajet/trajet/:idTrajet' : {
    controller : 'UserController',
    action : 'unsubscribeOnTrajet'
}
};
