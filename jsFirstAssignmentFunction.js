var someOperation = (a, b, c, d) => {
    let sum = (x, y) => x + y;
    let total = sum(a, b) * sum(c, d);
    console.log("¡El número es " + (total > 50? "mayor" : "menor") + " que 50!");
};

someOperation(2, 2, 4, 4);  
someOperation(2, 2, 3, 3);