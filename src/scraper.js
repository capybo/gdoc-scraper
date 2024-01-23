const cheerio = require('cheerio')

function parseContent(html) {
    const $ = cheerio.load(html);
    const scriptContents = [];

    $('script').each((index, element) => {
        const scriptContent = $(element).html();
        if (scriptContent) {
            const match = scriptContent.match(/DOCS_modelChunk = (\[.*?]);/);
            if (match && match[1]) {
                try {
                    const jsonData = JSON.parse(match[1]);
                    if (Array.isArray(jsonData)) {
                        for (const chunk of jsonData) {
                            if (chunk.s) {
                                scriptContents.push(chunk.s);
                            }
                        }
                    }
                } catch (error) {
                    console.error('Error parsing JSON from script content:', error);
                }
            }
        }
    });

    return scriptContents;
}

module.exports = { parseContent };