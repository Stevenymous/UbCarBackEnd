/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
   getUser: function(req, res) {

   },
    
   createUser: function(req, res) {
       User.create( {
           lastName: req.body.lastName,
           name: req.body.name,
           city: req.body.city,
           numberSeat: req.body.numberSeat,
           mail: req.body.mail,
           password: req.body.password
       }, function(err, created) {

       }
   },

   modifyUser: function(req, res) {
        User.update({ // voir doc waterline-docs
   },

   deleteUser: function(req, res) {

   }
};

