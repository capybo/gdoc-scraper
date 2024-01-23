function prettifyArray(array) {
    if (!Array.isArray(array)) {
        throw new Error('Input must be an array');
    }

    return array.join('\n');
}

module.exports = { prettifyArray };