//          DOM
const Container = document.getElementById("rants-container");
const username = document.getElementById("usernameInput");
const Rant = document.getElementById("rantInput");
const submit = document.getElementById("postRant");

//          Variables
const server = "http://localhost:3000/messages";

//          create message
let messageFormat = (firstLetter, Username, message)=>{
    let msg = `
     <div class="rant">
        <div class="profile-pic" style="background: #ff5733;">${firstLetter}</div>
        <div class="rant-content">
            <h3>${Username}</h3>
            <p>${message}</p>
        </div>
    </div>
    `
    return msg;
}

//          Display messages
addEventListener("DOMContentLoaded", ()=>{
    (function displayMessages(){
        fetch(server)
        .then(data=>data.json())
        .then(messages=>{
            
            messages.forEach(element => {
                
                Container.innerHTML += element.message;
           });
        })
    })()
})

//          Post message
function submitRant(){
    let firstLetter = (username.value.charAt(0)).toUpperCase();
    let rant = {message: messageFormat(firstLetter, username.value, Rant.value)}
    console.log(rant)

    fetch(server, {
        method: "POST",
        headers: {"Content-type": "application/js"},
        body: JSON.stringify(rant),
    })

}

submit.addEventListener("click", submitRant);