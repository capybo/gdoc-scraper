const { askUrl } = require('./input')
const { fetchContent } = require('./loader')
const { parseContent } = require('./scraper')
const { prettifyArray } = require("./prettier");


async function processInput() {
    try {
        const url = await askUrl();
        const html = await fetchContent(url)
        const data = parseContent(html)
        const prettifiedData = prettifyArray(data);

        console.log('Received text:', prettifiedData);

    } catch (error) {
        console.error('An error occurred: ', error)
    } finally {
        await processInput()
    }
}

processInput()