const chatbox = document.querySelector("#chatbox")
const form = document.querySelector("form")
const input = document.querySelector("input")
const time = new Date().toLocaleTimeString();


// listner is listening for a "submit" on the form, then applying forsubmit as a function

form.addEventListener("submit", formSubmitStructure);
function formSubmitStructure(stopRefresh){
    stopRefresh.preventDefault();
    const meMyselfI = ["Me", "Myself", "I"][Math.floor(Math.random() * 3)];
    messageSent(meMyselfI, input.value);
    form.reset();
}
let newMessage = false;
function messageSent(sender, theText) {
if (!theText.length) return;
newMessage++;    
const text =    `<div class='message' id='${newMessage}'>
                <span>${time}</span>
                <span class="sender">${sender}:</span>
                <span>${theText}</span>
                <span class="delete" onclick='deleteMe(${newMessage})'>Delete Me</span>
                </div>`;
chatbox.innerHTML += text;
chatbox.scrollTop = chatbox.scrollHeight;           
}


function deleteMe(newMessage) {
    const text = document.getElementById(newMessage);
    text.remove();
  }
const button = document.querySelector("button")

button.addEventListener("click", getLeJoke);
function getLeJoke() {
  fetch("https://api.icndb.com/jokes/random?limitTo=[nerdy]")
    .then((resp) => resp.json())
    .then((json) => messageSent("Did you know?", json.value.joke));
}