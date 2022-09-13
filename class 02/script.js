// ajax data from external server.
// in this class we will practise how to get a data from a website under the server.
// this free website name is icndb.com. its creating for ajax practise purpose.
// this full process helps api . api stands for application programming interface.
// api works with a constant link.
document.getElementById('getData').addEventListener('click', loadjokes)
function loadjokes(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://api.icndb.com/jokes/random/5', true)
    xhr.onload = function(){
        if(this.status===200){
            // console.log(this.responseText);
            let data = this.responseText;
            let output = JSON.parse(data);
            let joke = output.value;
            console.log(joke)
        }
    }
    xhr.send()
}