// This class is all about fetch API. 
// API stands for application programming interface.
// We can collect any information from another website by using Fetch API.
// Fetch api is the digital version of ajax
// API is previously set any browser. its build in .
// we can check api writting code _ console.log(window) 
// console.log(window)(fetch function. )
// fetch API works with Promise.
document.getElementById('getData').addEventListener('click', getData);
function getData(){
    fetch('http://api.icndb.com/jokes/random')
    .then(function(response){
        return response.json() // .json() or .text()
    })
    .then(function(data){
        console.log(data)
    })
    .catch(function(err){
        console.log(err)
    });
};


// moral of the upper code. 
// 1. first e ekta link theke data fetch er maddhome ante hobe
// 2. then data ta k .then method diye response kore kina dekhte hbe
// 3. then total data ta k arekta function diye store korte hobe.
// 4. erpor user k jodi data na dekhay tahole error ta dekhanor jonno .catch() function use krte hbe.addEventListener