const express =require('express');
const path=require("path");
const app = express();
const hbs=require("hbs");
const port=process.env.port || 3000;  //jo bhi avalable port ho vo allot ho jaaye
require('./db/conn');

const Signup=require("./models/signups")
const Form=require("./models/forms")
const static_path = path.join("__dirname")



app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set("view engine","hbs");
app.use(express.static(static_path))

// const publicPath=path.resolve(__dirname,"public");

app.use(express.static('public'));       //to define public path for css and javascript

app.use('/js',express.static(__dirname+'./../public/js'));   //to add external js files


app.get("/",(req,res) => {
res.render("index")
});

app.get("/form",(req,res)=>
{
res.render("form")
});

app.get("/signup",(req,res) => {
    res.render("signin")
});

app.get("/signin",(req,res)=>
{
res.render("signin")
});

app.post("/signup",async(req,res)=>{
    try{
        const password=req.body.password;
        const cpassword=req.body.cpassword;
    
    if(password===cpassword){
        const registerhelper=new Signup
        ({

        firstname:req.body.firstname,
        lastname:req.body.lastname,
        emailid:req.body.emailid,
        aadhar:req.body.aadhar,
        password:req.body.password,
        cpassword:req.body.cpassword

    })
    const signuped=await registerhelper.save();
    res.status(201).render("index");
    }else{
        res.render("error1");
    }
}
catch(error){
    res.status(400).send(error);
}
})

app.post("/signin",async(req,res)=>{
    try {
        const emailid=req.body.emailid;
        const password=req.body.password;

        const useremail=await Signup.findOne({emailid:emailid});

        if(useremail.password===password)
        {
            res.status(201).render("index");
        }else{
            res.send("invalid login credentials");
        }
        
    } catch (error) {
        res.status(400).send("Some problem occured")
    }
})

app.post("/form",async(req,res)=>{
    try {
        const formsubmission=new Form({
    
            name: req.body.name,
            problem:req.body.problem,
            Price:req.body.Price,
            worklocation:req.body.worklocation
    })
    const formsubmitted=await formsubmission.save();
    res.status(201).render("index")
    
    } catch (error) {
        res.status(400).send(error);
        
    }
    
    })
    


app.listen(port,()=>{
    console.log(`server is running at port no. ${port}`);
}
)