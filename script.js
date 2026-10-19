const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");
const attendeeCount = document.getElementById("attendeeCount");
const progressBar = document.getElementById("progressBar");
const greeting = document.getElementById("greeting");

let count = 0;
const maxCount = 50;


form.addEventListener("submit", function (event) {
  event.preventDefault();


const name = nameInput.value; 
const team = teamSelect.value;
const teamName = teamSelect.selectedOptions[0].text;

console.log(name, teamName);

count++;
console.log("Total check-ins: ", count);
attendeeCount.textContent = count;

const percentage = Math.round((count / maxCount) * 100) + "%";
console.log(`Progress: ${percentage}`);
progressBar.style.width = percentage;


const teamCounter = document.getElementById(team + "Count");
teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

const message = `Welcome ${name} from ${teamName}! You are attendee number ${count}.`;
greeting.textContent = message;

form.reset();
});