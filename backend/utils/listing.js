const dotenv = require('dotenv').config()
const request = require('request')

const API_KEY = process.env.PRIVATE_KEY
const URL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency'
const currencies = {
  BTC: 'BTC',
  ETH: 'ETH'
}

const listing = (sym) =>{
     var reqOpts = {
        method: 'GET',
        uri: URL + '/info',
        qs: {
          'symbol': sym

        },
        headers: {
          'X-CMC_PRO_API_KEY': API_KEY
        },
        json: true
      };

      request(reqOpts, (error,response)=>{
          if(error){
              callback('Unable to connect to API service', undefined)
          }
          else{
            var result = response.body.data
            var currency_data = result.BTC
          }
      })
}

listing(currencies.BTC)

module.exports = listing