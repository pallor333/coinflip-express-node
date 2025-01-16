//send put request
// document.querySelector('#submit').addEventListener('click', _ =>{
//     fetch('/coinflip')
//         .then(res => res.json()) //parse JSON response
//         .then(data => {
//             // put coinflip in a variable
//             const coinResult = { result data.result}
//             document.querySelector('#result').textContent = `${coinResult}`
//         })
//         .catch(error =>{
//             console.log('Error:', error)
//         })

// })
document.querySelector('#submit').addEventListener('click', makeReq) //add coinflip result
document.querySelector('#clear').addEventListener('click', clearResults) //clear results

//object for storing coinflips
let flipCounter = {
    Heads: 0,
    Tails: 0
}

async function makeReq(){
    //specify POST request in /coinflip endpoint
    const res = await fetch('/coinflip', {method: 'POST'}) 
    const data = await res.json()

    // console.log("main.js "+data)
    //Update object and then update show on HTML page
    flipCounter[data.result]++;
    // console.log(flipCounter);
    document.querySelector('#results').textContent = `Heads: ${flipCounter.Heads}  |  Tails: ${flipCounter.Tails}`

    //document.querySelector('#result').textContent = data.result
    // Create a new element for the result
    // const resultElement = document.createElement('p')
    // resultElement.textContent = data.result

    // Append the new result to the results container
    // document.querySelector('#results').appendChild(resultElement)
}

function clearResults(){
    flipCounter.Heads = 0, flipCounter.Tails = 0
    document.querySelector('#results').textContent = `Heads: ${flipCounter.Heads} Tails: ${flipCounter.Tails}`
    console.log(flipCounter)
}