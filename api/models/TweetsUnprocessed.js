/**
* TweetsUnprocessed.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	username: { type: 'string'},
  	text: { type: 'string'},
  	posted_at: { type: 'datetime'},
  	country: { type: 'string'},
  	processed: { type: 'boolean'}

  }
};

