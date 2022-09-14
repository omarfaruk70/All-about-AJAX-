// Javascript promise.
// promise holo callback function er digital version.
// callback function(analog) and promise(digital) version.
// promises has 2 built in method and they are 1. then() 2. catch();
// then() for successfully executed and catch()for catching error.
// we can use this two function as a perameter 1. resolve 2. reject.


// creating a server.
let members = [
    {firstname: "Omar", lastname: "Faruk"},
    {firstname: "Minhazur", lastname: "Rahman"},
    {firstname: 'Saiful', lastname: 'Emon'},
    {firstname: "Saikat", lastname: "Noman"}
];
// push a object to this server
function sendData(oneMember){
    setTimeout(function(){
        members.push(oneMember)
    }, 1000)
};
// to show or get output(all data) in your server.
function getData(){
    setTimeout(function(){
        let output = "";
        members.forEach(function(item){
            output += `<li>${item.firstname} ${item.lastname}</li>` 
        });
     document.getElementById('result').innerHTML = output;
    }, 3000)
};
sendData({firstname: 'Nurul Afsar', lastname: 'Opi'});
getData();