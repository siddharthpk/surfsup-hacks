const express = require('express')
const dotenv = require('dotenv').config()
const request = require('request')

import listing from './utils/listing'

const app = express()
const port = process.env.PORT || 5000
const API_KEY = process.env.PRIVATE_KEY




// To accept json requests 
app.use(express.json())

app.get('/listing',(req,res)=>{
    listing(BTC)
})

app.get('', (req,res)=>{

})


// Server binding & listening
app.listen(port, ()=>{
    console.log('Server running on Port:', port)
})
