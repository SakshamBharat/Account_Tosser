const express = require("express");
const user = require("./modles/user")
const path = require("path");
const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")))

app.get("/",async(req,res)=>{
    let users =  await user.find();
    res.render("index", {users})
})
app.get("/create",(req,res)=>{
    res.render("create")
    
})
app.get("/delete/:id",async(req,res)=>{
    let del_btn = await user.findOneAndDelete({_id : req.params.id});
    res.redirect("/")
    
})

app.get("/edit/:id",async(req,res)=>{
    let users = await user.findOne({_id : req.params.id});
    res.render("edit",{users})
    
})
app.post("/update/:id",async(req,res)=>{
    let {name, username, imgu} = req.body;
    let users = await user.findOneAndUpdate({_id : req.params.id},{name, username, imgu}, {new:true});
    res.redirect("/")
    
})





app.post("/reader",async(req,res)=>{
    let {name, username , imgu} = req.body
   let  create_user = await user.create({
        name,
        username,
        imgu
    });
    res.redirect("/")
    
})

app.listen(3000);