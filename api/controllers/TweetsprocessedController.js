/**
 * TweetsprocessedController
 *
 * @description :: Server-side logic for managing tweetsprocesseds
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	getClientFilter : function(query) {

		var result = {};
		if(query.userName)
			result.userName = new RegExp(query.userName, "i");
		if(query.originalText)
			result.originalText = new RegExp(query.originalText, "i");
		if(query.principal_topic)
			result.principal_topic = new RegExp(query.principal_topic, "i");
		if(query.country)
			result.country = new RegExp(query.country, "i");
		if(query.category)
			result.category = new RegExp(query.category, "i");
	    if(query.to_train) {
	        result.to_train = query.to_train === 'true' ? true : false;
	    }
	    if(query.keyWords){
	    	result.keyWords = {'$all': this.adaptArray(query.keyWords.split(",")) };
	    }
	   	if(query.topics){
	    	result.topics = {'$all': this.adaptArray(query.topics.split(",")) };
	    }
	   	if(query.entities){
	    	result.entities = {'$all': this.adaptArray(query.entities.split(",")) };
	    }
	   	if(query.hashTags){
	    	result.hashTags = {'$all': this.adaptArray(query.hashTags.split(",")) };
	    }
	  	if(query.persons){
	    	result.persons = {'$all': this.adaptArray(query.persons.split(",")) };
	    }
	    if(query.geography){
	    	result.geography = {'$all': this.adaptArray(query.geography.split(",")) };
	    }
	   	if(query.twitterUsers){
	    	result.twitterUsers = {'$all': this.adaptArray(query.twitterUsers.split(",")) };
	    }

	    return result;
	},

	adaptArray: function(stringsArray){
		var result = [];
		for(var i = 0; i < stringsArray.length; i++){
			result.push(new RegExp(stringsArray[i], "i"))
		}
		return result;
	},

	stringfyArraysOfItem: function(item){
		item.keyWords = item.keyWords.join(",");
		item.topics = item.topics.join(",");
		item.entities = item.entities.join(",");
		item.hashTags = item.hashTags.join(",");
		item.persons = item.persons.join(",");
		item.geography = item.geography.join(",");
		item.twitterUsers = item.twitterUsers.join(",");
		return item;
	},

	stringfyArrays: function(items){
		var self = this;
		var results = [];
		for(var i = 0; i < items.length; i++){
			results.push(self.stringfyArraysOfItem(items[i]));
		}
		return results;
	},

	getTweets: function (req, res) {
		var self = this;
		Tweetsprocessed.find(this.getClientFilter(req.query)).exec(function(err, items) {
        	res.json(self.stringfyArrays(items));
    	});
	},

	updateTweet: function(req, res){
		var ObjectId = require('mongodb').ObjectID;
		var self = this;
		var item = req.body;
		if(item.to_train) {
	    	item.to_train = item.to_train === 'true' ? true : false;
	    }
		Tweetsprocessed.native(function (err, collection) {
			collection.update({_id: new ObjectId(item.id)},{"$set": {principal_topic: item.principal_topic,to_train:item.to_train}}, function (err) {
		  		res.json(item);
		  	});
		});
	}
	
};

