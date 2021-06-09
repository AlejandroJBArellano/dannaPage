const express = require("express"), routes = require("./routes/index"), path = require("path"), app = express();

// * MVC

// Settings
app.set("port", process.env.PORT || 5000);
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.urlencoded({extended: false}))

// Middleweares
app.use((req, res, next)=>{
    console.log(`${req.url} ${req.method}`) 
    next();
})

// Routes
app.use(routes)

// Errores

// Static files
app.use(express.static(path.join(__dirname, "public")))

// Start the server 
app.listen(app.get("port"), _=>console.log(`server on port ${app.get("port")}`));