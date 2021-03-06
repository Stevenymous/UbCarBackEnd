/**
 * TrajetController
 *
 * @description :: Server-side logic for managing trajets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
   
   getAllTrajet: function(req, res) {
        Trajet.find().exec(function(err, trajetsFinded) {
            if (err) {
               return res.json(400, {
                    message: "Error : Can't be get all trajets" 
               });
            }
            else {
                return res.json(200, {
                    message: "Trajets finded",
                    trajets : trajetsFinded
                });
            }
        });
   },
    
   getTrajet: function(req, res) {
        Trajet.find({
            startCity : req.param('startCity'),
            arrivalCity : req.param('arrivalCity'),
            startDate : req.param('startDate')
        }).exec(function(err, trajetFinded) {
            if (err) {
               return res.json(400, {
                    message: "Error : Can't be get the trajet" 
               });
            }
            else {
                if (0  === trajetFinded.length)
                {
                    return res.json(404, {
                        message: "Trajets doesn't exist",
                    });
                }
                return res.json(200, {
                    message: "Trajets finded",
                    trajet : trajetFinded
                });
            }
        });
   },

   getTrajetById: function(req, res) {
        Trajet.findOne({
            id : req.param('id'),
        }).exec(function(err, trajetFinded) {
            if (err) {
               return res.json(400, {
                    message: "Error : Can't be get the trajet" 
               });
            }
            else {
                if (undefined  === trajetFinded)
                {
                    return res.json(404, {
                        message: "Trajet doesn't exist",
                    });
                }
                return res.json(200, {
                    message: "Trajet finded",
                    trajet : trajetFinded
                });
            }
        });
   },
       
   createTrajet: function(req, res) {
        Trajet.create( {
            startCity : req.body.startCity,
            arrivalCity : req.body.arrivalCity,
            startDate : req.body.startDate,
            numberSeatTotal : req.body.numberSeatTotal,
            numberSeatReminder : req.body.numberSeatTotal,
            details : req.body.details
        }).exec(function(err, trajetCreated) {
            if (err) {
               return res.json(400, {
                    message: "Error : Can't create the trajet" 
               });
            }
            else {
                return res.json(201, {
                    message: "Trajet created",
                    trajet : trajetCreated
                });
            }
        });
   },

   deleteTrajet: function(req, res) {
        Trajet.destroy( {
            id : req.body.id
        }).exec(function (err) {
            if (err) {
               return res.json(400, {
                    message: "Error : Can't delete the trajet" 
               });
            }
            else {
                return res.json(204);
            }
        });
   }
};
