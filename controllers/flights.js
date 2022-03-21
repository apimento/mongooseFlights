const Flight = require("../models/Flight"); 

const moment = require("moment"); 


exports.flight_index_get = (req, res) => { 
    Flight.find() 
    .then(flights => { 
        res.render("allFlights", {flights: flights, moment})
    })
    .catch(err => { 
        console.log(err);
    })
} 

exports.flight_show_get = (req,res) => { 
    console.log(req.query.id);
    Flight.findById(req.query.id)
    .then(flight =>{ 
        res.render("flightDetails",{flight, moment})
    })
    .catch(err=> { 
        console.log(err);
    });
};
   
exports.flight_add_post = (req,res) => { 
    console.log(req.body);
    req.body.departs = req.body.departs || Flight.departs 
    let flight = new Flight(req.body)

    flight
    .save() 
    .then(()=>{
        res.redirect('/allFlights');
    })
    .catch((err)=> { 
        console.log(err); 
        res.send("ERROR!")
    }) 
};  

exports.flight_add_get = (req, res) => { 
    Flight.find()
    .then(()=> { 
        res.render('addFlight');
    })
    .catch((err) => { 
        console.log(err);
    })
};

exports.flight_delete_post = (req,res) => { 
    console.log(req.params.id); 
    Flight.findByIdAndDelete(req.params.id)
    .then(() => {
       res.redirect("/allFlights")  
    })
    .catch(err=> { 
        console.log(err)
    })
} 
