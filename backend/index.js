const express = require('express')

const app = express()
const port = process.env.PORT || 5000

// To accept json requests 

app.use(express.json())




// Server binding & listening
app.listen(port, ()=>{
    console.log('Server running on Port:', port)
})
