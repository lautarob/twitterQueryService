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

  },

  statsByUsers: function (req, res) {

    var dateFrom = req.body.dateFrom;
    var dateTo = req.body.dateTo;

    QueryService.getStatsByUsers(dateFrom,dateTo,function(err,results){

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

  statsByUsersAndDate: function (req, res) {

    var dateFrom = req.body.dateFrom;
    var dateTo = req.body.dateTo;

    QueryService.getStatsByUsersAndDate(dateFrom,dateTo,function(err,results){

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

    statsByUsersAndMonth: function (req, res) {

    var dateFrom = req.body.dateFrom;
    var dateTo = req.body.dateTo;

    QueryService.getStatsByUsersAndMonth(dateFrom,dateTo,function(err,results){

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

  statsByHashTags: function (req, res) {

    var dateFrom = req.body.dateFrom;
    var dateTo = req.body.dateTo;

    QueryService.getStatsByHashTags(dateFrom,dateTo,function(err,results){

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

  statsByHashTagsAndMonth: function (req, res) {

    var dateFrom = req.body.dateFrom;
    var dateTo = req.body.dateTo;

    QueryService.getStatsByHashTagsAndMonth(dateFrom,dateTo,function(err,results){

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

  statsByPersons: function (req, res) {

    var dateFrom = req.body.dateFrom;
    var dateTo = req.body.dateTo;

    QueryService.getStatsByPersons(dateFrom,dateTo,function(err,results){

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

    statsByPersonsAndMonth: function (req, res) {

    var dateFrom = req.body.dateFrom;
    var dateTo = req.body.dateTo;

    QueryService.getStatsByPersonsAndMonth(dateFrom,dateTo,function(err,results){

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


  maxStatsByDay: function (req, res) {

    var dateTo = new Date();
    dateTo.setDate(dateTo.getDate()+1);

    var dateFrom = new Date();
    dateFrom.setDate(dateTo.getDate()-7);

    QueryService.getMaxStatsByDay(dateFrom,dateTo,function(err,results){

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

