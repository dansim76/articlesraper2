var db = require("../models");

module.experts = {
    findAll:function(req,res){
        db.headline
        .find(req.query)
        .sort({date: -1})
        .then(function(dbheadline){
            res.json(dbHeadline);
        })
    },
    delete: function(req,res){
        db.headline.remove({_id: req.params.id}).then(function(dbHeadline){
            res.json(dbHeadline)
        });
    },
    update: function(req, res){
        db.Headline.findOneAndUpdate({_id: req.params.id}, {$set:req.body },{new: true}).then(function(dbHeadline){

            res.json(dbHeadline);
        })
    }
};
