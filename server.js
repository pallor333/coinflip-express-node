const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path') //import path module
const PORT = 3000

app.use(cors())
//tell express to make public folder accessible
app.use('/public', express.static(path.join(__dirname, 'public'))) 

//Define coinflip   
function flipCoin(){
    return (Math.random()*1 >= 0.5) ? "Heads" : "Tails"
}

//Start server
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

// Serve up HTML page
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html') 
})

// GET request to return coinflip result
app.post('/coinflip', (request, response) => {
    console.log('GET /press request recieved, flipping coin...')
    const flip = flipCoin()
    response.json( {result: flip})

})

