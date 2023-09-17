import express from "express"; 
import { dirname } from "path";
import { fileURLToPath } from "url";
import session from "express-session";
import bodyParser from "body-parser"
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(session(
    {
        resave:false,
        saveUninitialized:false,
        secret: 'vishal',
    }
));

app.get('/index', (req,res) => {
    if (req.session.user){
    res.sendFile(__dirname + "/web/index.html");
    }
    else
    {
        res.send("user not logged in");
    }
})

app.get("/", (req,res) => {
        res.sendFile(__dirname + "/web/account.html"); 
});

app.post("/login", (req, res) => {

    //authentiate the user
    var result = authenticate(req.body.username)
    //now that the user is authenticated, populated the session
    if (result)
    {
        req.session.user = req.body.username;
        res.redirect("/index");
    }
    else
    {
        res.send("login failed");
    }
  });

app.get("/contact", (req,res) => {
    if(req.session.user){
       res.sendFile(__dirname + "/web/contact.html");
}
else{
    res.send("User not logged in");
}
});

app.get("/my-travels", (req,res) => {
    if(req.session.user){
       res.sendFile(__dirname + "/web/my-travels.html");
    }
    else
    {
        res.send("User not logged in");
    }
});

function authenticate(name)
{
    console.log(name);
    if (name === "a")
    {
        return true;
    }
    else
    {
        return false;
    }
    return false;
}


app.listen(3000, () =>{
    console.log("Server running on port 3001");
});


