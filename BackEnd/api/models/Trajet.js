/**
* Trajet.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  identity: 'trajet',
  connection: 'memory',
  tableName: 'trajet',
  attributes: {
  	id: {
      type: 'integer',
      autoPK: true,
      unique: true,
      columnName: 'id'
    },
    villeDepart: {
      type: 'string',
      required: true,
      minLength: 2,
      maxLength: 30,
      columnName: 'villeDepart'
    },
    villeArrivee: {
      type: 'string',
      required: true,
      minLength: 2,
      maxLength: 30,
      columnName: 'villeArrivee'
    },
    dateDepart: {
      type: 'datetime',
      required: true,
      columnName: 'dateDepart'
    },
    place: {
      type: 'integer',
      required: true,
      columnName: 'place'
    },
    detail: {
      type: 'string',
      columnName: 'detail'
    }
   // // reference a user
   // owners: {
   //   collection: 'user',
   //   via: 'trajets'
   // }
   // // reference a commentaire
   // commentaires: {
   //   collection: 'commentaire',
   //   via: 'owner'
   // }
  }
};

