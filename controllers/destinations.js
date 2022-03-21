const Flight = require('../models/Flight');


// exports.destination_add_get = (req, res) => { 
//     Flight.findById(req.params.id, function(err, flight) {
//         flight.destinations.push(req.body);
//         flight.save(function(err) {
//           res.redirect(`/addDestination/${flight._id}`);
//         });
//     });  
// } 


exports.destination_add_post = async (req,res) => { 
        console.log(req.body);
        let flight = await Flight.findById(req.params.id)
        console.log(flight);
        flight.destinations.push(req.body); 
        flight.save(); 
        res.redirect(`/flightDetails?id=${req.params.id}`);

        // flight
        // .save() 
        // .then(()=>{
        //     res.redirect('/flightDetails?id=<%=flight.id%>');
        // })

        // .catch((err)=> { 
        //     console.log(err); 
        //     res.send("ERROR!")
        // }) 
};  
    