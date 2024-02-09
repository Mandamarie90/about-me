function favColor(){
let color= prompt("What is your favorite color?");

document.write("Nice! " + color + " is cool.");
}

function doYouLikeCats() {
    let userLikesCats = confirm ("Do you love cats?");
    if(userLikesCats) {
        return "We just became bestfriends!";
    } else {
        return "Aww.. thats so sad!";
    }
}