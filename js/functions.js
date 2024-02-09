function greeting( name ) {
    let output = `Nice to meet you ${name}!`;
    return output;
  }
  let officialGreeting = greeting("John");
console.log(officialGreeting);


function multiInputAlert() {
    let input1 = prompt("Enter your first name:");
    let input2 = prompt("Enter your last name:");
    let input3 = prompt("Enter your email:");
  
    
    if (!input1 || !input2 || !input3) {
      // Display error message and prompt again
      alert("Error: All inputs must be provided.");
      multiInputAlert(); // Call the function recursively for a second chance
      return; // Stop execution of the function
    }
// Add inputs into a single message
var message = "Thank you, " + input1 + "\n";
message +=  input2 + "for subscribing with email"+"\n";
message += " " + input3+ ".";

// Display the message in an alert
alert(message);
}