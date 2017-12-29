const Triangle = require('./dist')

let triangle = new Triangle([
    [6],
    [3, 5],
    [9, 7, 1],
    [4, 6, 8, 4]
])

console.log(triangle.maxTotal())