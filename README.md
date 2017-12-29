# Hell Triangle
Hell Triangle Challenge for B2W - SkyHub

## Requirements
Node.js 4.3.2+

## Solution
For a small triangle, it's possible to iterate over all lines and calculate all posible routes to return the highest value.
However, using this technique in triangles with many lines, the number of possible routes could take a long time to be calculated or even overload the memory.
The solution was to calculate the triangle bottom-up.

## How to execute

Install dependencies:
```bash
npm install
```

Build the library:
```bash
npm run build
```

Now create an js file and import the library:
```js
const Triangle = require('./dist')
```
Or using ES6:
```js
import Triangle from './dist'
```
Initialize the library passing the matrix on its constructor, and calculates using the **maxTotal** method:
```js
let triangle = new Triangle([
    [6],
    [3, 5],
    [9, 7, 1],
    [4, 6, 8, 4]
])

console.log(triangle.maxTotal())
```

To see this example in action run:
```js
node example.js
```

## Tests

To run the tests:
```bash
npm test
```

## Release History
* 0.1.0 Initial release