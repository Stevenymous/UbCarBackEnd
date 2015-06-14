/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  identity: 'User',
  connection: 'mongodb',
  tableName: 'User',
  attributes: {
    lastName: {
      type: 'string',
      required: true,
      minLength: 2,
      maxLength: 25,
      columnName: 'lastName'
    },
    name: {
      type: 'string',
      required: true,
      minLength: 2,
      maxLength: 25,
      columnName: 'name'
    },
    city: {
      type: 'string',
      required: true,
      minLength: 2,
      maxLength: 50,
      columnName: 'city'
    },
    numberSeat: {
      type: 'integer',
      required: true,
      columnName: 'numberSeat'
    },
    password: {
      type: 'string',
      required: true,
      columnName: 'password'
    },
    mail: {
      type: 'email',
      required: true,
      unique: true,
      columnName: 'mail'
    },
    // reference to trajet
    trajets: {
      collection: 'Trajet',
      via: 'users'
    }
    //commentaires: {
    //  collection: 'Commentaire',
    //  via: 'ownerUser'
    //}
  }
};
