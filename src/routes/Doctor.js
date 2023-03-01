const express = require('express');
const router = express.Router();

const Doctor = require('./../models/Doctor');

router.post("/list",async function(req,res){
    var doctors =await Doctor.find();
    res.json(doctors);
    });

    router.post("/list/:location",async function(req,res){
        var doctors =await Doctor.find({location:req.params.location});
        res.json(doctors);
        });



        router.post("/add",async function(req,res){
        await Doctor.deleteOne({id:req.body.id});

    var newDoctor= new Doctor({
        id:req.body.id,
        doctorname :req.body.doctorname,
        degree:req.body.degree,
        speciality:req.body.speciality,
        workplace:req.body.workplace,
        biography:req.body.biography,
        appointmentNumber:req.body.appointmentNumber,
        location:req.body.location,
        patient:req.body.patient,
        experience:req.body.experience,
        review:req.body.review,
        image:req.body.image,

    });

    await newDoctor.save();

    const response = {message:"New Doctor Added!" + `id: ${req.body.id}`};

    res.json(response);


    });

    router.post("/delete",async function(req,res){
        await Doctor.deleteOne({id:req.body.id});
        
            const response = {message:"Doctor Deleted!" + `id: ${req.body.id}`};
        
            res.json(response);
        
        
            });

            module.exports = router;