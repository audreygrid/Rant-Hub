//          DOM
const Container = document.getElementById("rants-container");
const username = document.getElementById("usernameInput");
const Rant = document.getElementById("rantInput");
const submit = document.getElementById("postRant");
const insp = document.getElementById("inspiration")

const inspQuotes = [
    "The whole world just seems to be plotting to ruin your day huh?",
    "This just keeps getting better and better huh",
    "So how's your day going?",
    "Morning.",
    "the usual?",
    "what a day huh?",
    "you gave it your all",
    "My God Ikr?!",
    "some people.",
    "This sucks fr",
    "after all that..",
    "really testing your patience arent they",
    "let it all out",
    "I can already sense the frustration",
    "what was THAT about?",
    "lay it on me",
    "Oh boy-",
    "Let it rip."
]

let randVal = Math.ceil(Math. random() * ((inspQuotes.length -1) - 0) + 0); 



//          Variables
const server = "https://1a303fa835f5fc.lhr.life/messages";

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
    console.log(randVal, inspQuotes.length);
    insp.innerText = inspQuotes[randVal];
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
    }).then(()=>{location.reload();});

}

submit.addEventListener("click", submitRant);