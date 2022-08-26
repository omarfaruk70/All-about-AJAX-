// asynchronous javascript and xml
// AJAX can get data from any server without loading the page
document.getElementById('getData').addEventListener('click', loadData)

function loadData(){
    // creating ajax build in object that is XHR(Xml HTTP Request)
    let xhr = new XMLHttpRequest();
    // console.log(xhr)
    xhr.open('GET', 'data2.txt', true);
    xhr.onload = function(){
        if(this.status===200){
            console.log(this.responseText)
        } 
    }
    // console.log(xhr)
    xhr.send()
};
//  some value able http status code 
//  200 = Ok. everything is on my way. 
//  403  = forbidden. 
//  404 = page not found




// function loadData(){
//     // creating ajax build in object that is XHR(Xml HTTP Request)
//     let xhr = new XMLHttpRequest();
//     // console.log(xhr)
//     xhr.open('GET', 'data.txt', true);
//     xhr.onreadystatechange = function(){
//         if(this.status===200 && this.readyState === 4){
//             console.log(this.responseText)
//         } 
//     }
//     // console.log(xhr)
//     xhr.send()
// };
// some important readystate value.
// 0 = request not initialized
// 1 = server connection established
// 2 = request received
// 3 = request processing 
// 4 = request finished and response is ready 





// document.getElementById("getData").addEventListener("click",loadData);
// function loadData(){
// var xhr = new XMLHttpRequest();
// xhr.onload = function(){
// if(this.status===200 ){
// console.log(this.responseText)
// }
// }
// xhr.open("GET","http://api.icndb.com/jokes/random",true)
// xhr.send();
// console.log(xhr)
// }