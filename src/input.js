const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function askUrl() {
    return new Promise((resolve, reject) => {
        const urlValidationRegex = /^https:\/\/docs\.google\.com\//;

        function prompt() {
            rl.question('Enter URL (or "exit" to quit): ', (url) => {
                if (url.toLowerCase() === 'exit') {
                    rl.close();
                } else if (urlValidationRegex.test(url)) {
                    resolve(url);
                } else {
                    console.error('Invalid URL format. Please make sure the URL starts with "https://docs.google.com/".');
                    prompt();
                }
            });
        }

        prompt();
    });
}

module.exports = { askUrl };