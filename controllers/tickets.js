const Ticket = require("../models/ticket");  

function newTicket(req,res) { 
    res.render("/newTicket")
}

async function addTicket(req, res){ 
    await Ticket.create(req.body); 
    res.redirect(`/allFlights/${req.params.id}`) 
}  

module.exports = { 
    add: addTicket, 
    new: newTicket
}