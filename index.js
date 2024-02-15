//importing all necessary modules from api to get the app working
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import env from "dotenv";

const app = express();
const port = 3000;

env.config();
app.use(express.static("public"));// setting the folder in ralativeness with which we will interfere further
app.use(bodyParser.urlencoded({extended : true}));
const key = process.env.KEY;
const config = {
    headers : {
        Authorization : key
    },
}; //declaring the necessary key for authorization

app.get("/", (req, res) =>{
    res.render("index.ejs");
});

app.post("/get-lyrics",  async (req, res) =>{
    try{
        const lyrics = req.body.search; //getting the lyrics needed for next request
        const result = await axios.get("https://api.genius.com/search?q=" + lyrics, config);//requesting the api server, with our variable, lyrics- which is the input of the user
        console.log(result.data.response.hits);//controling if is works as expected
        const content = result.data.response.hits;
        res.render("index.ejs", {content: content}); //sending the js object to the index.ejs template, to be rendered
    } catch(error){
        console.error("Error:", error); //handling the errors
        res.status(500).send("Internal Server Error");
    }
});

app.listen(port, () =>{
    console.log(`Listening on port ${port}.`); //listenting the port for our localhost
});