var array= require('../data/friends');

module.exports= function(app){
    app.get("/api/friends",function(req,res){
        res.json(array);
    });

    app.post("/api/friends",function(req,res){
        array.push(req.body);
        res.json(true);
    });
}