console.log("page loaded...");

function removeReq(e){
    var request = e.parentElement.parentElement;
    var notiElement = e.parentElement.parentElement.parentElement.parentElement.querySelector(".badge");
    var notiNum = notiElement.innerText;
    notiNum --;
    request.remove();
    notiElement.innerText = notiNum;
}

function acceptReq(e){
    removeReq(e);
    var badges = document.querySelectorAll(".badge");
    var connections = badges[1];
    var connectionCounter = connections.innerText;
    connectionCounter++;
    connections.innerHTML = connectionCounter;
}

function edit(e){
    var newName = window.prompt("enter your name");
    var name = e.parentElement.parentElement.querySelector("h1");
    name.innerText = newName;
}