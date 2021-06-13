const dotenv = require('dotenv').config()
const request = require('request')

const API_KEY = process.env.PRIVATE_KEY
const URL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency'
const currencies = {
  BTC: 'BTC',
  ETH: 'ETH'
}

const cryptolist = (sym,callback) =>{
    var reqOpts = {
        method: 'GET',
        uri: URL + '/quotes/latest',
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
             callback(undefined, {
               currencyName : response.body.data.BTC.name,
               currencyQuote: response.body.data.BTC.quote,
               currencyPrice: response.body.data.BTC.quote.USD.price,
               currencyMarketCap: response.body.data.BTC.quote.USD.market_cap
           })
            //console.log(response.body.data)
        }
    })
}

//cryptolist(currencies.BTC)

module.exports = cryptolist