const express = require('express')
const dotenv = require('dotenv').config()
const request = require('request')

const listing = require('./utils/listing')

const app = express()
const port = process.env.PORT || 5000
const API_KEY = process.env.PRIVATE_KEY
const currencies = {
  BTC: 'BTC',
  ETH: 'ETH'
}


// To accept json requests 
app.use(express.json())

app.get('/listing',(req,res)=>{
  if(!req.query.symbol)
    return res.send({
      error: 'You must provide a correct Symbol'
    })
  listing(req.query.symbol, (error, cryptoData )=>{
    if(error){
      res.send({
        error
      })
    }

    res.send({
      name: cryptoData
    })
  })
})

// app.get('', (req,res)=>{

// })


// Server binding & listening
app.listen(port, ()=>{
    console.log('Server running on Port:', port)
})
