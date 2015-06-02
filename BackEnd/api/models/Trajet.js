/**
* Trajet.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  identity: 'trajet',
  connection: 'mongodb',
  tableName: 'trajet',
  attributes: {
  	id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey : true,
      columnName: 'id'
    },
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
      type: 'datetime',
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
    owners: {
      collection: 'User',
      via: 'trajets'
    }//,
   // // reference a commentaire
    //commentaires: {
    //  collection: 'Commentaire',
    //  via: 'ownerTrajet'
    //}
  }
};

