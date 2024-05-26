// Goal is to create a to do list where the user enters the text and submits.
// text should split based on commas, full stops and new lines.




let main = document.getElementById('main');
let button = document.getElementById('button');

let blankList = '';


let newHeading = 'New Heading';

//main.addEventListener("click", setHeading);

function setHeading() {
    let listitem = document.createElement('li');
    let textArea = document.getElementById('textarea');
    listitem.appendChild(document.createTextNode(textArea.value));
    document.querySelector('ul').appendChild(listitem);
    //document.getElementById('main').innerHTML = textArea.value;

}

function resetList() {
    document.getElementById('main').innerHTML = blankList;
}
