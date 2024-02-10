function favColor(){
let color= prompt("What is your favorite color?");

document.write("Nice! " + color + " is cool.");
}

function doYouLikeCats() {
    let userLikesCats = confirm("Do you like cats?");
    if( userLikesCats ) {
        return "We just became bestfriends!";
    } else {
        return "Aww... thats so sad!";
    }
}

function numberOfCats(){
    let cats= prompt("How many cats do you have?");
    cats = Number(cats);
    let sentence= "Wow! You have " + cats + " cats.";
    document.write(sentence);
}
function rateMe() {
    let rating = prompt("On a scale of 1-5 how much do you like cats?")
    rating = Number(rating);
    for( let i = 0; i < rating; i++ ) {
      console.log("🐱");
    }
  }
  