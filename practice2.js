// function sayHello(name, age){
//     console.log('Hello', name, 'you have', age, 'years of age.')
// }

// sayHello('nico', 15)


// function howOld(name, age){
//     console.log(name, 'is', age, 'years old.')
// }

// howOld('Jason', 15)



const calculator = {
    add: function(a, b){
        return a + b;
    },
    multiply: function(a, b){
        return a * b;
    },
    subtract: function(a, b){
        return a - b;
    },
    divide: function(a, b){
        return a / b;
    },
    power: function(a, b){
        return a ** b;
    }
}

const plus = calculator.add(5, 5)
console.log(plus)

const subtraction = calculator.subtract(5, 3)
console.log(subtraction)

const power = calculator.power(2, 3)
console.log(power)