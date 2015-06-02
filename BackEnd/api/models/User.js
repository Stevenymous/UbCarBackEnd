/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  identity: 'user',
  connection: 'mongodb',
  tableName: 'user',
  attributes: {
  	 id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey : true,
      columnName: 'id'
    },
    lastName: {
      type: 'string',
      required: true,
      minLength: 2,
      maxLength: 15,
      columnName: 'nom'
    },
    name: {
      type: 'string',
      required: true,
      minLength: 2,
      maxLength: 15,
      columnName: 'prenom'
    },
    city: {
      type: 'string',
      required: true,
      minLength: 2,
      maxLength: 30,
      columnName: 'ville'
    },
    numberSeat: {
      type: 'integer',
      required: true,
      columnName: 'place'
    },
    password: {
      type: 'string',
      required: true,
      columnName: 'mdp'
    },
    mail: {
      type: 'email',
      required: true,
      unique: true,
      columnName: 'email'
    },
    // reference to trajet
    trajets: {
      collection: 'Trajet',
      via: 'owners'
    },
    //commentaires: {
    //  collection: 'Commentaire',
    //  via: 'ownerUser'
    //}
  }
};
