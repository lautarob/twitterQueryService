// QueryService.js - in api/services

module.exports = {

    getStatsByTopics: function(dateFrom,dateTo,callbackReturn) {

        TweetsProcessed.native(function(err, collection) {
          if (err) return res.serverError(err);

          collection.aggregate( [
            {"$match": {
             "posted_at" : 
                  { "$gte": new Date(dateFrom), 
                    "$lt": new Date(dateTo)
                  }
                        }
             },
            { "$unwind" : "$topics" },
            {"$group" : {"_id":"$topics", "count":{"$sum":1}}},
            {"$sort" : { "count" : -1}}
            ] ).toArray(function (err, results) {
            if (err)
                {
                    callbackReturn(err,null);
                }
                callbackReturn(null,results)
          });

        });

    },

    getStatsByTopicsAndCountry: function(dateFrom,dateTo,callbackReturn) {

        TweetsProcessed.native(function(err, collection) {
          if (err) return res.serverError(err);

          collection.aggregate( [
            {"$match": {
             "posted_at" : 
                  { "$gte": new Date(dateFrom), 
                    "$lt": new Date(dateTo)
                  }
                        }
             },
            { "$unwind" : "$topics" },
            { "$group": {"_id": {
                "topic": "$topics",
                "country": "$country"
            },
            "count": { "$sum": 1 }
            }}
            ] ).toArray(function (err, results) {
                if (err)
                {
                    callbackReturn(err,null);
                }
                callbackReturn(null,results)
            });

        });

    },

    getStatsByTopicsAndDate: function(dateFrom,dateTo,callbackReturn) {

        TweetsProcessed.native(function(err, collection) {
          if (err) return res.serverError(err);

          collection.aggregate( [
            {"$match": {
             "posted_at" : 
                  { "$gte": new Date(dateFrom),
                    "$lt": new Date(dateTo)
                  }
                        }
             },
            { "$unwind" : "$topics" },
            { "$group": {"_id": {
                "topic": "$topics",
                "date": "$posted_at"
            },
            "count": { "$sum": 1 }
            }}
            ] ).toArray(function (err, results) {
                if (err)
                {
                    callbackReturn(err,null);
                }
                callbackReturn(null,results)
            });

        });

    },

    getStatsByTopicsAndMonth: function(dateFrom,dateTo,callbackReturn) {

        TweetsProcessed.native(function(err, collection) {
          if (err) return res.serverError(err);

          collection.aggregate( [
            {"$match": {
             "posted_at" : 
                  { "$gte": new Date(dateFrom),
                    "$lt": new Date(dateTo)
                  }
                        }
             },
            { "$unwind" : "$topics" },
            { "$group": {"_id": {
                "topic": "$topics",
                "month": {"$substr": ['$posted_at', 5, 2]}
            },
            "count": { "$sum": 1 }
            }},
            {"$sort" : {"topic": -1, "count" : -1}}

            ] ).toArray(function (err, results) {
                if (err)
                {
                    callbackReturn(err,null);
                }
                callbackReturn(null,results)
            });

        });

    },

    getStatsByUsers: function(dateFrom,dateTo,callbackReturn) {

        TweetsProcessed.native(function(err, collection) {
          if (err) return res.serverError(err);

          collection.aggregate( [
            {"$match": {
             "posted_at" : 
                  { "$gte": new Date(dateFrom), 
                    "$lt": new Date(dateTo)
                  }
                        }
             },
            { "$unwind" : "$twitterUsers" },
            {"$group" : {"_id":"$twitterUsers", "count":{"$sum":1}}},
            {"$sort" : { "count" : -1}}
            ] ).toArray(function (err, results) {
            if (err)
                {
                    callbackReturn(err,null);
                }
                callbackReturn(null,results)
          });

        });

    },

    getStatsByUsersAndDate: function(dateFrom,dateTo,callbackReturn) {

        TweetsProcessed.native(function(err, collection) {
          if (err) return res.serverError(err);

          collection.aggregate( [
            {"$match": {
             "posted_at" : 
                  { "$gte": new Date(dateFrom),
                    "$lt": new Date(dateTo)
                  }
                        }
             },
            { "$unwind" : "$twitterUsers" },
            { "$group": {"_id": {
                "user": "$twitterUsers",
                "date": "$posted_at"
            },
            "count": { "$sum": 1 }
            }}
            ] ).toArray(function (err, results) {
                if (err)
                {
                    callbackReturn(err,null);
                }
                callbackReturn(null,results)
            });

        });

    },

    getStatsByUsersAndMonth: function(dateFrom,dateTo,callbackReturn) {

        TweetsProcessed.native(function(err, collection) {
          if (err) return res.serverError(err);

          collection.aggregate( [
            {"$match": {
             "posted_at" : 
                  { "$gte": new Date(dateFrom),
                    "$lt": new Date(dateTo)
                  }
                        }
             },
            { "$unwind" : "$twitterUsers" },
            { "$group": {"_id": {
                "user": "$twitterUsers",
                "month": {"$substr": ['$posted_at', 5, 2]}
            },
            "count": { "$sum": 1 }
            }},
            {"$sort" : {"user": -1, "count" : -1}}

            ] ).toArray(function (err, results) {
                if (err)
                {
                    callbackReturn(err,null);
                }
                callbackReturn(null,results)
            });

        });

    },

    getStatsByHashTags: function(dateFrom,dateTo,callbackReturn) {

        TweetsProcessed.native(function(err, collection) {
          if (err) return res.serverError(err);

          collection.aggregate( [
            {"$match": {
             "posted_at" : 
                  { "$gte": new Date(dateFrom), 
                    "$lt": new Date(dateTo)
                  }
                        }
             },
            { "$unwind" : "$hashTags" },
            {"$group" : {"_id":"$hashTags", "count":{"$sum":1}}},
            {"$sort" : { "count" : -1}}
            ] ).toArray(function (err, results) {
            if (err)
                {
                    callbackReturn(err,null);
                }
                callbackReturn(null,results)
          });

        });

    },

    getStatsByHashTagsAndMonth: function(dateFrom,dateTo,callbackReturn) {

        TweetsProcessed.native(function(err, collection) {
          if (err) return res.serverError(err);

          collection.aggregate( [
            {"$match": {
             "posted_at" : 
                  { "$gte": new Date(dateFrom),
                    "$lt": new Date(dateTo)
                  }
                        }
             },
            { "$unwind" : "$hashTags" },
            { "$group": {"_id": {
                "hashTag": "$hashTags",
                "month": {"$substr": ['$posted_at', 5, 2]}
            },
            "count": { "$sum": 1 }
            }},
            {"$sort" : {"user": -1, "count" : -1}}

            ] ).toArray(function (err, results) {
                if (err)
                {
                    callbackReturn(err,null);
                }
                callbackReturn(null,results)
            });

        });

    },

    getStatsByPersons: function(dateFrom,dateTo,callbackReturn) {

        TweetsProcessed.native(function(err, collection) {
          if (err) return res.serverError(err);

          collection.aggregate( [
            {"$match": {
             "posted_at" : 
                  { "$gte": new Date(dateFrom), 
                    "$lt": new Date(dateTo)
                  }
                        }
             },
            { "$unwind" : "$persons" },
            {"$group" : {"_id":"$persons", "count":{"$sum":1}}},
            {"$sort" : { "count" : -1}}
            ] ).toArray(function (err, results) {
            if (err)
                {
                    callbackReturn(err,null);
                }
                callbackReturn(null,results)
          });

        });

    },

    getStatsByPersonsAndMonth: function(dateFrom,dateTo,callbackReturn) {

        TweetsProcessed.native(function(err, collection) {
          if (err) return res.serverError(err);

          collection.aggregate( [
            {"$match": {
             "posted_at" : 
                  { "$gte": new Date(dateFrom),
                    "$lt": new Date(dateTo)
                  }
                        }
             },
            { "$unwind" : "$persons" },
            { "$group": {"_id": {
                "person": "$persons",
                "month": {"$substr": ['$posted_at', 5, 2]}
            },
            "count": { "$sum": 1 }
            }},
            {"$sort" : {"user": -1, "count" : -1}}

            ] ).toArray(function (err, results) {
                if (err)
                {
                    callbackReturn(err,null);
                }
                callbackReturn(null,results)
            });

        });

    },

    getMaxStatsByDay: function(dateFrom,dateTo,callbackReturn) {

        TweetsProcessed.native(function(err, collection) {
          if (err) return res.serverError(err);

          collection.aggregate( [
            {"$match": {
             "posted_at" : 
                  { "$gte": new Date(dateFrom),
                    "$lt": new Date(dateTo)
                  }
                        }
             },
            { "$unwind" : "$topics" },
            { "$group": {"_id": {
                "topic": "$topics",
                "day": {"$substr": ['$posted_at', 0, 10]}
            },
            "count": { "$sum": 1 }
            }},
            {"$sort" : {"_id.day": 1, "count": -1}}

            ] ).toArray(function (err, results) {
                if (err)
                {
                    callbackReturn(err,null);
                }
                callbackReturn(null,results)
            });

        });

    },



};