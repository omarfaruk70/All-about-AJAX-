// this is ajax class 04 (callback function)
// ekta function er vitor arekta function call kora k callback function bole.
setTimeout(function(){
    // console.log('amar sonar bangla')
    
}, 3000) // 1 sec = 1000 mili sec




// creating a server.
let members = [
    {firstname: 'Omar', lastname: 'Faruk', age: 21},
    {firstname: 'Saiful', lastname: 'Emon', age : 22}
];
// send a data to server(members) after 5sec.
function sendDatatoServer(person){
    setTimeout(function(){
        members.push(person)
    }, 1000)
};
//  to show or get output(data) in browser.
function getData(){
    setTimeout(function(){
        let output = '';
        members.forEach(function(item){
            output += `<li> ${item.firstname} ${item.lastname} ${item.age} </li>`;
        });
        document.getElementById('showData').innerHTML = output;
    }, 1500)
};
sendDatatoServer({firstname:'minhazur', lastname:'rahman', age: 20});
getData();


