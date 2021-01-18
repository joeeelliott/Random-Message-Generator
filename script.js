const person = ["Jelliott", "Gelly", "Smally", "Aidan", "Adz", "Ashy", "Dec", "Murph"];
const action = ["will have a new born baby", "will be sentenced to a significant prison sentence", "will buy a new car", "will be getting married", "will move into a new house", "will lose their job", "will get their dream job", "will win the lottery", "will be involved in a car crash", "will go bald", "will become famous", "will still be living with their parents"];
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const year = ["2022", "2023", "2024", "2025", "2026"];

const randomMessage = () => {
  let output1 = `${person[Math.floor(Math.random()*8)]} ${action[Math.floor(Math.random()*12)]} in ${month[Math.floor(Math.random()*12)]} ${year[Math.floor(Math.random()*5)]}`;
  let msgInput = document.querySelector("#msgInput").value;
  let output2 = `${msgInput} ${action[Math.floor(Math.random()*12)]} in ${month[Math.floor(Math.random()*12)]} ${year[Math.floor(Math.random()*5)]}`
  if(msgInput){
    return document.querySelector("#msg").innerHTML = output2;
  } else {
    return document.querySelector("#msg").innerHTML = output1;
  }
}