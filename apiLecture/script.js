// async function getMoney()  {
//     //Identify the container (div) to put the information inside of
//     let div = document.querySelector('#cointList')
//     console.log( 'waaaa' );
//     //create a variable to store the data we collect from the api We will call the api using fetch().

//     let responseFromApi = await fetch( 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false' );

//     //convert the information to JSON (some format the computer can understand)

//     let coinData = await responseFromApi.json();
//     // console.log( coinData ) // coinData is an array of objects

//     //For each coin, I want to generate a paragraph tag
//     for( let i = 0; i < coinData.length; i++ ) {
//         // console.log(counData[i]);
//         let currentCoin = coinData[i]; // store the current coin we are inside from the array into a variable
//         //create a paragraph tag

//         let pTag = document.createElement("p");
//         //fill paragraph with coins name
//         pTag.innerText = currentCoin.name + "-" + currentCoin.current_price;
//         // console.log(pTag);

//         //add a css class to the pTag
//         pTag.classList.add("coin")

//         //put the paragraph tag inside out div called coinList
//         div.appendChild(pTag);


//     }

// }

let cardsDiv = document.querySelector("#cards");
let currentUsername = "";


function getUsername( element ) {
    currentUsername = element.value;
    console.log(currentUsername);
}

function makeCoderCard( data ) {
    let res = `<div class ="card">
                    <img src="${data.avatar_url} alt=${data.login}">
                    <div class="flex-1">
                        <h3>${data.login} - ${data.name}</h3>
                        <p>Location: ${data.location}</p>
                        <p>Repositories: ${data.public_repos}</p>
                    </div>
                </div>`
    return res;
}

async function search() {
    let response = await fetch( "https://api.github.com/users/" +currentUsername );
    let coderData = await response.json();
    // console.log( coderData );
    cardsDiv.innerHTML = makeCoderCard( coderData ) + cardsDiv.innerHTML;

}