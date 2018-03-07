window.document.onload = function(e){ 
    let firstLayerWeightsMatrix = [[]]; // 
    let secondLayerWeightsMatrix = [[]]; // 
    let firstLayerArray = [];
    let secondLayerArray = [];

}

let multipleMatrixWithVector = function(_matrix, _vector) {
    let _out = Array.apply(null, Array(_matrix.length)).map(Number.prototype.valueOf,0);

    for (let i = 0; i < _matrix.length; i++) {
        if (_matrix[i].length != _vector.length)
            throw "Number of columns in matrix does not match number of elements in array"
        
        for (let j = 0; j < _matrix[i].length; j++) {
            _out[i] += _matrix[i][j] * _vector[j];
        }
    }

    return _out;
}

let generateRandomMatrix = function(_col, _row) {
    let _out = [];

    for (let i = 0; i < _col; i++) {
        _out[i] = generateRandomVector(_col);
    }

    return _out;
}

let generateRandomVector = function(_size) {
    let _out = [];

    for (let i = 0; i < _size; i++) {
        _out[i] = Math.random();
    }

    return _out;
}