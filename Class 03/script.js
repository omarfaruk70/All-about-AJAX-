document.getElementById('getjokes').addEventListener('click', loadjokes);
function loadjokes(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://api.icndb.com/jokes/random/10', true);
    xhr.onload = function(){
        if(this.status === 200){
           let output = JSON.parse(this.responseText);
           let result = output.value;
           console.log(result);
        }
    }
    xhr.send();
}