const express = require('express')
const dotenv = require('dotenv').config()
const request = require('request')

const listing = require('./utils/listing')
const cryptolist = require('./utils/cryptolist')

const app = express()
const port = process.env.PORT || 5000
const API_KEY = process.env.PRIVATE_KEY
const currencies = {
  BTC: 'BTC',
  ETH: 'ETH'
}


// To accept json requests 
app.use(express.json())

// Individual Listing Data Endpoint
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

// Crypto List Endpoint
app.get('/quotes',(req,res)=>{
  if(!req.query.symbol)
    return res.send({
      error: 'You must provide a correct Symbol'
    })
  cryptolist(req.query.symbol, (error, cryptoData )=>{
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


// Server binding & listening
app.listen(port, ()=>{
    console.log('Server running on Port:', port)
})
