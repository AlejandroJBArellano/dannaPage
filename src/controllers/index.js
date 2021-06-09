const index = (req, res) => res.render("index"), second = (req,res) => res.render ("second"), third = (req, res) => res.render("third"), home = (req, res)=>res.redirect("/"), segunda = (req, res, next)=> res.redirect("/second"), tercera = (req, res, next)=>res.redirect("/third");

module.exports = { index, second, third, home, segunda, tercera }