const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const list = document.querySelectorAll("li");
const paragraph = document.querySelectorAll("p");
const header = document.getElementById("h1");

header.style.backgroundColor = "navy";
container1.style.backgroundColor = "white";
container2.style.backgroundColor = "white";

for(let i = 0; i < paragraph.length; i++){
    paragraph[i].style.backgroundColor = 'red';
}

for(let i = 0; i < list.length; i++){
    list[i].style.backgroundColor = 'red';
    list[i].style.fontWeight = 'bold';
    list[i].style.fontFamily = 'Consolas';
}