const express = require('express')

//rest object
const app = express()

//rest api
app.get('/',(req,res)=>{
    res.send({
        message:'welcome to Deco-Design'
    })
})

//PORT
const PORT = 8080

//run listen
app.listen(PORT, ()=>{
    console.log(`Server Running on ${PORT}`);
})
