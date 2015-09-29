// QueryService.js - in api/services

module.exports = {

    getStatsByTopics: function(dateFrom,dateTo,callbackReturn) {

        TweetsProcessed.native(function(err, collection) {
          if (err) return res.serverError(err);

          collection.aggregate( [
            { "$unwind" : "$topics" },
            {"$group" : {"_id":"$topics", "count":{"$sum":1}}}
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
            { "$unwind" : "$topics" },
            { "$group": {"_id": {
                "topic": "$topics",
                "date": "$datetime"
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



};