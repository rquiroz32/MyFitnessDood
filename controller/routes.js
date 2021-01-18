const express = require('express');
const router = express.Router();
const path = require('path')
const mongoose = require('mongoose')

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

const db = require("../models");




/////// BEGIN HTML ROUTES //////////


router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

router.get('/exercise', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
})

router.get('/stats', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/stats.html'))
})



/////// BEGIN API ROUTES //////////

router.get('/api/workouts', function (req, res) {

    db.Workout.aggregate( [
        {
          $addFields: {
            totalDuration: { 
                $sum: "$exercises.duration"
             } 
          }
        }
     ] ).exec((err,result)=>{
         if(err){
             console.log("Error during data aggregation: " + err)
         }else{
         console.log("the results are below!!!! \n \n \n " )
         console.log(result)
         res.json(result)
         }
     })

      
});




router.get('/api/workouts/range', function (req, res) {
  db.Workout.find({}, (err, data) => {
        if (err) {
            console.log("Database Error:" + err)
        } else {
            console.log(data)
            console.log(data.length)
            let newDataArr = data.slice(0,7)
            console.log(newDataArr)
            res.json(newDataArr)
            
        }
    });   
    

});


router.post('/api/workouts', function (req, res) {
    
    db.Workout.create({}, (err, data) => {
        if (err) {
            console.log("Database Error in post route: " + err)
        } else {
            res.json(data)
        }
    });    
})

router.put('/api/workouts/:id', function (req, res) {
    const workout = req.body
    const id = req.params.id
    console.log(JSON.stringify(workout))
    console.log(id)
 
    db.Workout.update({ _id: id }, { $push: { exercises: workout }}, { new: true }, (err, data) => {
        if (err) {
            console.log("Database Error in put route: " + err)
        } else {
            res.json(data)
        }
    })      
   
});


module.exports = router;