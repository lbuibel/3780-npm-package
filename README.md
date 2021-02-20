# NPM Package Project - DGM370

### Each function performs a common sales or business calculation. The functions are as follows:

<br>

## Getting started
After installing the packing using:
```
npm i @luibel/dgm3780
```
You'll want to import the module in your javascript file by including this at the top of your file:
```
// exa:

const lib = require('@luibel/dgm3780')

let example = lib.discountPrice(100, 20) // equals 80
```
<br>

## Included Functions

#### 1) Calculating Margin:
---

Calculates the profit margin percentage based on the retail and wholesale price of a product

exa:
```
function margin(retail, wholesale) {
    let margin = Math.round((((retail - wholesale) / retail) * 100))
    return margin
}

margin(135, 72) // results in 46.67
```
<br>

#### 2) Calculating Markup:
---
Calculates the percentage/difference between the actual cost and the selling price

exa:

```
function markup(retail, wholesale) {
    let markup = ((retail - wholesale) / wholesale)*100
    return markup
}

markup(135, 72) // results in 87.5
```
<br>

#### 3) Calculating Profit Percentage:
----
Calculates the difference in the selling price vs the profit

```
unction profitPercentage(retail, wholesale) {
    let result = (retail / wholesale)
    Math.round((result + Number.EPSILON) * 100) / 100
    return result
}

profitPercentage(125, 60) // results in 108.33 
```
<br>

#### 4) Interest Calculator:
---
Calculates the total amount accrued based on principle down payment, interest rate percentage and years.

```
function interest(principle, rate, years) {
    let r = rate/100
    let a = (principle * 1) + (principle * (r * years))
    Math.round((a + Number.EPSILON) * 100) / 100
    return a
}

interest(10000, 3.875, 5) // results in 12,134.14

```
<br>

#### Discounted Price Calculator:
---
Calculates the sale price of an item based on the retail price and discount percentage.
```
function discountPrice(price, discountPercent) {
    let d = 1 - (discountPercent / 100)
    total = price * d
    return total
}

discountedPrice(100, 25) // Results in 75
```