const express = require('express');

const app = express();
const PORT = 3000;

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);

app.get('/',(req,res)=>{
    console.log("requested for 0.0.0.0:3000/")

    return res.json({message:"hello"})

}
)

app.get('/aboutme',(req,res)=>{
    console.log("requested for 0.0.0.0:3000/aboutme")

    return res.json({message:"abotme"})

}
)



