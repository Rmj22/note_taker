const path = require('path'); 
const fs = require("fs")
const db = require("../db/db")


module.exports = function (app) {
    var idNum = 0;
    //to get all the notes
    app.get("/api/notes", function(req,res){
         res.json(db);
    });
    //to get single note
    app.get("/api/notes/:note", function(req,res){
        var chosen = req.params.notes;
    })

    // for (var i = 0; i < notes.length; i++) {
    //     if (chosen === notes[i].routeName) {
    //         return res.json(notes[i]);
    //     }
        
    // }

    // return res.json(false);

    app.post("/api/notes", function(req,res){
        idNum++;
        var CreateNote = req.body;

        CreateNote.id = idNum;

        db.push(CreateNote);
        res.json(CreateNote)
    })

    app.delete("/api/notes/:id", function(req,res){
        var deleteId = req.params.id;
        var entry = db.filter(note =>{
            return entry.id = deleteId;
        })[0];

        var index = db.indexOf(entry);
        db.splice(index,1);
        res.end("deleted")
    })
}