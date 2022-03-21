exports.index_get= (req,res) => { 
    res.render("home/index" , {welcomeMessage: "Welcome to General Assembly's floight booking service. Please select one option to continue"});
}