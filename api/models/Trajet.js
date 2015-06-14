/**
* Trajet.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  identity: 'Trajet',
  connection: 'mongodb',
  tableName: 'Trajet',
  attributes: {
    startCity: {
      type: 'string',
      required: true,
      minLength: 2,
      maxLength: 30,
      columnName: 'villeDepart'
    },
    arrivalCity: {
      type: 'string',
      required: true,
      minLength: 2,
      maxLength: 30,
      columnName: 'villeArrivee'
    },
    startDate: {
      type: 'string',
      required: true,
      columnName: 'dateDepart'
    },
    numberSeat: {
      type: 'integer',
      required: true,
      columnName: 'place'
    },
    details: {
      type: 'string',
      columnName: 'detail'
    },
   // // reference a user
    users: {
      collection: 'User',
      via: 'trajets',
      dominant: true
    }//,
   // // reference a commentaire
    //commentaires: {
    //  collection: 'Commentaire',
    //  via: 'ownerTrajet'
    //}
  }
};

