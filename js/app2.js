var saveSelection = Cookies.get("selection");
var selectionContainer = document.getElementById("saveDisplay");
selectionContainer.innerHTML = `<p> Welcome! ${saveSelection} </p>`;

var image = document.createElement("img");
var message = document.createElement("p");
var waitWhat = document.createElement("h4")
selectionContainer.append(image);
selectionContainer.append(message);
selectionContainer.append(waitWhat);

if (saveSelection === "experiencedUser") {
    image.setAttribute("src", "../images/youAreWelcome.jpg");
} else if (saveSelection === "worstUser") {
    image.setAttribute("src", "../images/rickRolled.gif");
    console.log("Hah ha ha, Hah Hah ha ha ha, ha ha ha, Hah");
} else if (saveSelection === "newUser") {
    image.setAttribute("src", "../images/userCreation");
} else {
    image.setAttribute("src", "../images/waitWhat.jpg");
    console.log("Um, this guy didn't choose anything, what do I do?");
    console.log("I don't know, ask Jerry");
    console.log("He doesn't know either");
    console.log("WHAT THE HELL DO WE DO!?!?!");
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHHHH");
    message.innerText = "Dude, my guy, my bro, choose a freaking save. We can't work like this!"
}

function removeSaveCookie() {
    Cookies.remove(`selection`);
}