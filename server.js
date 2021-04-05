//#region Variables
const
    express = require("express"),
    app = express(),
    morgan = require("morgan");
//#region Configuraciones
app.use(morgan("short"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));


app.post("/login", (req, res)=>{
    console.log(req.body)
    const passwd_Real = "select password from users where usuario = ${req.body.login}"
    
    if (req.body.password == passwd_Real) {
        res.send(200,"todo bien")
        res.redirect("/home")
    } else {
        res.send(404,"todo mal")
    }
})

//#region Start WEB-APPLICATION
app.listen((80), () => {
    console.log(`Server started on: http://localhost:80/`)
})
