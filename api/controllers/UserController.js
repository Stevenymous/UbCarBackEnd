/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
   authentificationUser: function(req, res) {
       User.findOne( {
           mail : req.param('mail'), 
           password : req.param('password') 
       }).exec(function (err, userFinded) {
            if (err) {
                return res.json(400, {
                    message : "Error : can't be connected"
                });
            }
            else {
                return res.json(200, {
                    message: "User connected",
                    userConnected : userFinded
                });
            }
       });
   },
    
   createUser: function(req, res) {
       User.create( {
           lastName : req.body.lastName,
           name : req.body.name,
           city : req.body.city,
           numberSeat : req.body.numberSeat,
           mail : req.body.mail,
           password : req.body.password
      }).exec(function(err, userCreated) {
           if (err) {
               return res.json(400, {
                   message: "Error : user not created"

               });
           }
           else {
                return res.json(201, {
                    message: "User created with succes"
                });
           }
      });
   },

   modifyUser: function(req, res) {
        User.update( {
            id : req.param('idUser')
        }, {
           lastName : req.body.lastName,
           name : req.body.name,
           city : req.body.city,
           numberSeat : req.body.numberSeat
        }).exec(function(err, users) {
           if (err) {
               return res.json(400, {
                   message: "Error : user can't be updated"
               });
           }
           else {
                return res.json(200, {
                    message: "User updated with succes"
                });
           }
        });
   },

   positionOnTrajet: function(req, res) {
       Trajet.findOne( {
           id : req.param('idTrajet')
       }).exec(function(err, trajetFinded) {
           if (err) {
               return res.json(400, {
                   message: "Error : trajet can't be finded to add an user on this trajet"     
               });
           }
           else {
               trajetFinded.users.add(req.param('idUser'));
               trajetFinded.save(function(err) {});
               return res.json(200, {
                   message: "User is position on the trajet"
               });
           }
       });
   },

   unsubscribeOnTrajet : function(req, res) {
       Trajet.findOne( {
           id : req.param('idTrajet')
       }).exec(function(err, trajetFinded) {
           if (err) {
               return res.json(400, {
                   message: "Error : trajet can't be finded to delete an user on this trajet"     
               });
           }
           else {
               trajetFinded.users.remove(req.param('idUser'));
               trajetFinded.save(function(err) {});
               return res.json(200, {
                   message: "User delete on the trajet"
               });
           }
       });
   },

   deleteUser: function(req, res) {
        User.destroy( {
            id : req.body.id
        }).exec(function(err, user) {
           if (err)
           {
               return res.json(400, {
                   message: "Error : user can't be deleted"
               });
           }
           else
           {
                return res.json(user);
           }
        });
   }
};

