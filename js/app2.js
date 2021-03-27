// this block of code welcomes the user of the chosen Cookie
var saveSelection = Cookies.get("selection");
var selectionContainer = document.getElementById("saveDisplay");
selectionContainer.innerHTML = `<p> Welcome! ${saveSelection} </p>`;

// this block is used to create html tags to the selectionContainer
var image = document.createElement("img");
var message = document.createElement("p");
selectionContainer.append(image);
selectionContainer.append(message);

// this loop creates an Image to the respetive user
if (saveSelection === "experiencedUser") {
    image.setAttribute("src", "../images/youAreWelcome.jpg");
} else if (saveSelection === "worstUser") {
    image.setAttribute("src", "../images/rickRolled.gif");
    console.log("Hah ha ha, Hah Hah ha ha ha, ha ha ha, Hah");
// I am aware of the cringe and I am !ashamed
} else if (saveSelection === "newUser") {
    image.setAttribute("src", "../images/userCreation");
} else {
// this block of code only happens when a cookie is not selected
    image.setAttribute("src", "../images/waitWhat.jpg");
    console.log("Um, this guy didn't choose anything, what do I do?");
    console.log("I don't know, ask Jerry");
    console.log("He doesn't know either");
    console.log("WHAT THE HELL DO WE DO!?!?!");
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHHHH");
    message.innerText = "Dude, my guy, my bro, choose a freaking save. We can't work like this!"
}

// this function removes a cookie when you click the "Back" link
function removeSaveCookie() {
    Cookies.remove(`selection`);
}