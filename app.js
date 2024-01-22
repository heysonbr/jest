// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromEuroToYen = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 156.5;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromEuroToPound = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 0.87;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}







module.exports = { fromEuroToDollar, fromEuroToYen , fromEuroToPound };