const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');

//if you want to display on new page 
// router.get("/addDestination",destinationsCtrl.destination_add_get);
router.post("/addDestination/:id",destinationsCtrl.destination_add_post); 


module.exports = router; 