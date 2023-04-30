const express = require('express') ;
const cors = require('cors')
const app = express() ;
const port = process.env.PORT || 5000 ;

const names = require('./data/pleasename.json')

app.use(cors())


app.get('/', (req , res)=>{
    res.send('this is travel server')
})

app.get('/names' , (req , res)=>{
    res.send(names)
})

app.get('/names/:id',(req , res)=>{
    const id = req.params.id ;
    const singlePlease = names.find(n => n.id === id)
    res.send(singlePlease)
})

app.listen(port , ()=>{
    console.log('the server is running on ',port)
})