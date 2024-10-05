// // QUESTION:1
// // function checkInput(input) {
// //     if (typeof input === 'string' && input.length === 1) {
// //         const ascii = input.charCodeAt(0);

// //         // Check if input is a number (0-9)
// //         if (ascii >= 48 && ascii <= 57) {
// //             console.log("The input is a number.");
// //         } 
// //         // Check if input is an uppercase letter (A-Z)
// //         else if (ascii >= 65 && ascii <= 90) {
// //             console.log("The input is an uppercase letter.");
// //         } 
// //         // Check if input is a lowercase letter (a-z)
// //         else if (ascii >= 97 && ascii <= 122) {
// //             console.log("The input is a lowercase letter.");
// //         } 
// //         // If it's not a number or a letter
// //         else {
// //             console.log("The input is neither a number nor a letter.");
// //         }
// //     } else {
// //         console.log("Please provide a single character.");
// //     }
// // }
// // // Question:02
// // function compareIntegers(num1, num2) {
// //     if (num1 === num2) {
// //         console.log("Both integers are equal.");
// //     } else if (num1 > num2) {
// //         console.log(`${num1}is larger.`);
// //     } else {
        
// //         console.log(`${num2}is larger.`);
// //     }
// // }
// // // Question:03
// // function checkNumber(num) {
// //     if (num > 0) {
// //         console.log("The number is positive.");
// //     } else if (num < 0) {
// //         console.log("The number is negative.");
// //     } else {
// //         console.log("The number is zero.");
// //     }
// // }
// // // Question:04
// // function isVowel(char) {
// //     // Convert the input character to lowercase to handle both uppercase and lowercase vowels
// //     char = char.toLowerCase();

// //     // Check if the character is a vowel
// //     if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
// //         return true;
// //     } else {
// //         return false;
// //     }
// // }
// // // Question:05
// // function validatePassword() {
// //     // a. Store the correct password in a JS variable
// //     const correctPassword = "mySecretPassword";

// //     // b. Ask the user to enter their password
// //     const userPassword = prompt("Please enter your password:");

// //     // c. Validate the passwords

// //     // i. Check if the user has entered a password
// //     if (!userPassword) {
// //         alert("Please enter your password.");
// //     } 
// //     // ii. Check if both passwords are the same
// //     else if (userPassword === correctPassword) {
// //         alert("Correct! The password you entered matches the original password.");
// //     } else {
// //         alert("Incorrect password.");
// //     }
// // }

// // // Example usage:
// // validatePassword();

// // QUESTION:06
// // var greeting;
// // var hour = 13;

// // if (hour < 18) {
// //     greeting = "Good day";
// // } else {
// //     greeting = "Good evening";
// // }

// // console.log(greeting); // Output: Good day

// // QUESTION:07
// function checkTime() {
//     // Take time input from the user (expecting a number between 0000 and 2359)
//     const time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):"));

//     // Validate the input to be within the valid 24-hour range
//     if (time >= 0 && time < 2400) {
//         if (time >= 0 && time < 1200) {
//             alert("Good morning!");
//         } else if (time >= 1200 && time < 1700) {
//             alert("Good afternoon!");
//         } else if (time >= 1700 && time < 2100) {
//             alert("Good evening!");
//         } else {
//             alert("Good night!");
//         }
//     } else {
//         alert("Invalid time. Please enter a valid time in 24-hour format.");
//     }
// }

// // Example usage:
// checkTime();

