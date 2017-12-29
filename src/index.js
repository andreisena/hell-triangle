'use strict'

module.exports = class Triangle {
    /*
     * Class constructor.
     *
     * @param {array} matrix
     */
    constructor(matrix) {
        this.matrix = matrix
    }

    /*
     * Get the maximum total of the triangle.
     *
     * @return {number}
     */
    maxTotal() {
        if (this.isValid() === false)
            throw new Error('The triangle structure is not valid.')

        for (let i = this.matrix.length - 2; i >= 0; i--) {
            let row = this.matrix[i]
            for (let j = 0; j < row.length; j++) {
                this.matrix[i][j] += Math.max(this.matrix[i + 1][j], this.matrix[i + 1][j + 1])
            }
        }

        return this.matrix[0][0]
    }

    /*
     * Check if the triangle matrix is a valid multidimensional
     * array and all child arrays have the correct length.
     *
     * @return {boolean}
     */
    isValid() {
        return Array.isArray(this.matrix) &&
            this.matrix.filter((childArray, index) => {
                return Array.isArray(childArray) === false || childArray.length !== index + 1
            }).length === 0
    }
}