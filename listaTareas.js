const express = require('express');
const app = express();
const port = 3000

const task =[{
    id:'123456',
    isCompleted:false,
    description:"Walk the dog",
}];

app.get('/task',(req,res)=>{
    res.json(task);
})
app.listen(port,()=>{
    console.log(`servidor funcionando en el puerto ${port} `);
})