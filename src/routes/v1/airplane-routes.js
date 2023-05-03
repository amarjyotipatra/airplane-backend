const express=require('express');
const router=express.Router();
const { AirplaneController } = require('../../controllers');

router.post("/",AirplaneController.createAirplane)  //  /api/v1/airplanes

module.exports=router