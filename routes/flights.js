const express = require("express");  

const router = express.Router();  

router.use(express.urlencoded({extended: true})); 

const flightCntrl = require("../controllers/flights");  

router.get("/addFlight",flightCntrl.flight_add_get);
router.post("/addFlight",flightCntrl.flight_add_post); 
router.get("/allFlights", flightCntrl.flight_index_get);  
router.get("/flightDetails", flightCntrl.flight_show_get); 
router.delete("/flight/delete/:id", flightCntrl.flight_delete_post); 


module.exports = router;