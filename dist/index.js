'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
    /*
     * Class constructor.
     *
     * @param {array} matrix
     */
    function Triangle(matrix) {
        _classCallCheck(this, Triangle);

        this.matrix = matrix;
    }

    /*
     * Get the maximum total of the triangle.
     *
     * @return {number}
     */


    _createClass(Triangle, [{
        key: 'maxTotal',
        value: function maxTotal() {
            if (this.isValid() === false) throw new Error('The triangle structure is not valid.');

            for (var i = this.matrix.length - 2; i >= 0; i--) {
                var row = this.matrix[i];
                for (var j = 0; j < row.length; j++) {
                    this.matrix[i][j] += Math.max(this.matrix[i + 1][j], this.matrix[i + 1][j + 1]);
                }
            }

            return this.matrix[0][0];
        }

        /*
         * Check if the triangle matrix is a valid multidimensional
         * array and all child arrays have the correct length.
         *
         * @return {boolean}
         */

    }, {
        key: 'isValid',
        value: function isValid() {
            return Array.isArray(this.matrix) && this.matrix.filter(function (childArray, index) {
                return Array.isArray(childArray) === false || childArray.length !== index + 1;
            }).length === 0;
        }
    }]);

    return Triangle;
}();