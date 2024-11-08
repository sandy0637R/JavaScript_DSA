function timeConversion(s) {
    // Get the hour, minutes, seconds, and period (AM/PM)
    let hour = parseInt(s.slice(0, 2)); // The hour part, e.g., "07" -> 7
    const minutesAndSeconds = s.slice(2, 8); // The ":MM:SS" part
    const period = s.slice(-2); // Last two characters, either "AM" or "PM"

    // Check if it's AM or PM
    if (period === "AM") {
        // If it's 12 AM, set hour to 0 for midnight in 24-hour format
        if (hour === 12) {
            hour = 0;
        }
    } else { // period is "PM"
        // If it's PM and the hour is not 12, add 12 to convert to 24-hour time
        if (hour !== 12) {
            hour += 12;
        }
    }

    // Convert hour back to two digits if needed (e.g., 0 -> "00", 9 -> "09")
    const hourString = hour < 10 ? "0" + hour : hour.toString();

    // Return the formatted time in 24-hour format
    return hourString + minutesAndSeconds;
}

console.log(timeConversion("07:05:45PM")); // Output: "19:05:45"
console.log(timeConversion("12:01:00AM")); // Output: "00:01:00"
console.log(timeConversion("12:01:00PM")); // Output: "12:01:00"
console.log(timeConversion("01:01:00AM")); // Output: "01:01:00"
