/**
* Commentaire.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  identity: 'Commentaire',
  connection: 'mongodb',
  tableName: 'Commentaire',
  attributes: {
  	//id: {
    //  type: 'integer',
    //  autoIncrement: true,
    //  primaryKey : true,
    //  columnName: 'id'
    //},
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
    },
   // // reference a trajet
    //ownerTrajet: {
    //  model: 'Trajet'
    //},

    //ownerUser: {
    //  model: 'User'
    //}
    
  }
};

