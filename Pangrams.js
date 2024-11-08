// A pangram is a sentence that includes every letter of the alphabet at least once.

function pangrams(s) {
    // Convert the string to lowercase
    s = s.toLowerCase();

    // Initialize an array to track the alphabet (26 letters)
    let alphabet = Array(26).fill(false);

    // Loop through each character in the string
    for (let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i);
        
        // Check if the character is a letter (a to z)
        if (charCode >= 97 && charCode <= 122) {
            // Calculate the index (0 for 'a', 1 for 'b', ..., 25 for 'z')
            let index = charCode - 97;
            alphabet[index] = true;  // Mark this letter as seen
        }
    }

    // Check if all letters are present
    for (let i = 0; i < 26; i++) {
        if (!alphabet[i]) {
            return "not pangram";  // Return if any letter is missing
        }
    }

    return "pangram";  // All letters were found
}


console.log(pangrams("We promptly judged antique ivory buckles for the next prize")); // Output: "pangram"
console.log(pangrams("We promptly judged antique ivory buckles for the prize"));       // Output: "not pangram"
