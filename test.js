


test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

     //Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})


test("One euro should be 156.5 yens", function() {
    // Importo la funcion desde app.js
    const { fromEuroToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToYen(2);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 2 * 156.5;

     //Hago mi comparación (la prueba)
    expect(fromEuroToYen(2)).toBe(313); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One euro should be 0.87 pound", function() {
    // Importo la funcion desde app.js
    const { fromEuroToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pound = fromEuroToPound(4);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 4 * 3.48;

     //Hago mi comparación (la prueba)
    expect(fromEuroToPound(4)).toBe(3.48); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})