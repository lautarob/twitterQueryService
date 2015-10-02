/**
 * QueryController
 *
 * @description :: Server-side logic for managing queries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 
 module.exports = {

  statsByTopics: function (req, res) {

    var dateFrom = req.body.dateFrom;
    var dateTo = req.body.dateTo;

    QueryService.getStatsByTopics(dateFrom,dateTo,function(err,results){

     if(!err)
     {
      res.status(200);
      return res.send(results);
    }
    else
    {
      res.status(500);
      return res.send(err);
    }


  });

  },

  statsByTopicsAndCountry: function (req, res) {

    var dateFrom = req.body.dateFrom;
    var dateTo = req.body.dateTo;

    QueryService.getStatsByTopicsAndCountry(dateFrom,dateTo,function(err,results){

       if(!err)
       {
        res.status(200);
        return res.send(results);
      }
      else
      {
        res.status(500);
        return res.send(err);
      }

    })
  },

  statsByTopicsAndDate: function (req, res) {

    var dateFrom = req.body.dateFrom;
    var dateTo = req.body.dateTo;

    QueryService.getStatsByTopicsAndDate(dateFrom,dateTo,function(err,results){

       if(!err)
       {
        res.status(200);
        return res.send(results);
      }
      else
      {
        res.status(500);
        return res.send(err);
      }

  });

  },

    statsByTopicsAndMonth: function (req, res) {

    var dateFrom = req.body.dateFrom;
    var dateTo = req.body.dateTo;

    QueryService.getStatsByTopicsAndMonth(dateFrom,dateTo,function(err,results){

       if(!err)
       {
        res.status(200);
        return res.send(results);
      }
      else
      {
        res.status(500);
        return res.send(err);
      }

  });

  }





};

