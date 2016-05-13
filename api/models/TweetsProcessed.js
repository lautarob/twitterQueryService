/**
* TweetsProcessed.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    userName: { type: 'string'},
    originalText: { type: 'string'},
    topics: { type: 'array'},
    principal_topic: {type: 'string'},
    entities: { type: 'array'},
    hashTags: { type: 'array'},
    persons: { type: 'array'},
    to_train: {type : 'boolean'},
    geography: { type: 'array'},
    twitterUsers: { type: 'array'},
    keyWords: { type: 'array'},
    posted_at: { type: 'datetime'},
    country: { type: 'string'},
    filter_id: { type: 'integer'},
    category: { type: 'string'}

  }
};
