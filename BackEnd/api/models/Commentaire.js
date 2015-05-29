/**
* Commentaire.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  identity: 'commentaire',
  connection: 'memory',
  tableName: 'commentaire',
  attributes: {
  	id: {
      type: 'integer',
      autoPK: true,
      unique: true,
      columnName: 'id'
    },
    message: {
      type: 'string',
      size: 250,
      columnName: 'message'
    },
    dateCommentaire: {
      type: 'datetime',
      autoCreatedAt: true,
      columnName: 'dateDepart',
      defaultsTo: function (){ return new Date(); }
    }
   // // reference a trajet
   // owner: {
   //   model: 'trajet'
   // }
  }
};

