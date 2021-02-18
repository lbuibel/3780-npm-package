module.exports = function tiny(string) {
    if (typeof string !== "string") throw new TypeError("tiny wants a string")
    return string.replace(/\s/g, "")
}