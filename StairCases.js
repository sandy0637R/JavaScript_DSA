//Make staircases using #
function staircase(n) {
    for (let i = 1; i <= n; i++) {
        let line = '';

        // Add spaces for the current row
        for (let j = 0; j < n - i; j++) {
            line += ' ';
        }

        // Add hashes for the current row
        for (let k = 0; k < i; k++) {
            line += '#';
        }

        // Print the constructed line
        console.log(line);
    }
}

const n=6;
staircase(n);
