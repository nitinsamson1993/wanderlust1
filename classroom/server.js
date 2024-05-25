const express = require("express");
const app = express();
const users = require("./routes/user.js")
const posts = require("./routes/post.js");
const session = require("express-session");
const flash = require("connect-flash");


app.use(session({secret: "mysupersecretstring", resave: false, saveUninitialized: true}));

app.get("/reqcount", (req, res) =>{

    if (req.session.count){
        req.session.count++;
    } else {
        req.session.count = 1;
    }
   
    res.send(`You sent a request ${req.session.count} times`);
})

// app.get("/test", (req, res) =>{
//     res.send("test successful");
// });


// const cookieParser = require("cookie-parser");

// app.use(cookieParser());

// app.get("/getcookies", (req, res) =>{
//     res.cookie("greet", "hello!");
//     res.cookie("madeIn", "india");
//     res.send("sent you some cookies");
// })


// app.get("/", (req, res) =>{
//     console.dir(req.cookies);
//     res.send("Hi, i am root!");
// })

// app.use("/users", users)
// app.use("/posts", posts)


app.listen(3000, () =>{
    console.log("server is listening to 3000");
});