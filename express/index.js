import express from "express"; 
import { dirname } from "path";
import { fileURLToPath } from "url"
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.get("/", (req,res) => {
    console.log(__dirname + "/web/index.html");
    res.sendFile(__dirname + "/web/index.html");
});

app.get("/contact.html", (req,res) => {
    console.log(__dirname + "/web/contact.html");
    res.sendFile(__dirname + "/web/contact.html");
});

app.get("/my-travels.html", (req,res) => {
    console.log(__dirname + "/web/my-travels.html");
    res.sendFile(__dirname + "/web/my-travels.html");
});


app.listen(3000, () =>{
    console.log("Server running on port 3000");
});