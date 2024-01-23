const axios = require('axios')

function fetchContent(url) {
    return axios
        .get(url)
        .then(response => response.data)
        .catch(error => {
            throw new Error(`Error fetching content from ${url}: ${error.message}`)
        })
}

module.exports = { fetchContent };