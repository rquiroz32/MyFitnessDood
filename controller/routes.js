const express = require('express');
const router = express.Router();
const path = require('path')
const mongojs= require('mongojs')

const databaseUrl = "workout"
const collections = ["workouts"]
const db = mongojs(databaseUrl, collections);

db.on("error", error => {
    console.log("Database Error:", error);
  });

/////// BEGIN HTML ROUTES //////////


router.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'../public/index.html'))
})

router.get('/exercise', function(req,res){
    res.sendFile(path.join(__dirname,'../public/exercise.html'))
})

router.get('/stats', function(req,res){
    res.sendFile(path.join(__dirname,'../public/stats.html'))
})

/////// BEGIN API ROUTES //////////

router.get('/api/workouts', function(req,res){

    db.workouts.find({}, (err, data )=>{
        if (err){
            console.log("Database Error:" + err)
        }else{
                      
        res.json(data)
        }
    });

});

// router.get('/api/workouts', function(req,res){

//     db.workouts.find().sort({day: -1}, (err, data )=>{
//         if (err){
//             console.log("Database Error:" + err)
//         }else{
                      
//         res.json(data)
//         }
//     });

// });



router.post('/api/workouts', function(req,res){
    res.sendFile(path.join(__dirname,'../public/exercise.html'))
})


module.exports = router;