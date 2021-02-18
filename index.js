module.exports = function margin(retail, wholesale) {
    let margin = Math.round((((retail - wholesale) / retail) * 100))
    return margin
}

module.exports = function markup(retail, wholesale) {
    let markup = ((retail - wholesale) / wholesale)*100
    return markup
}

module.exports = function interest(principle, rate, years) {
    let r = rate/100
    let a = (principle * 1) + (principle * (r * years))
    Math.round((a + Number.EPSILON) * 100) / 100
    return a
}

module.exports = function profitPercentage(retail, wholesale) {
    let result = (retail / wholesale)
    Math.round((result + Number.EPSILON) * 100) / 100
    return result
}

module.exports = function discountPrice(price, discountPercent) {
    let d = discountPercent / 100
    total = price * d
    return total
}

