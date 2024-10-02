
// const is = {};

// Check if the value is a number
is.num = function(value) {
    return typeof value === 'number';
};

// Check if the value is NaN (Not a Number)
is.nan = function(value) {
    return Number.isNaN(value);
};

// Check if the value is a string
is.str = function(value) {
    return typeof value === 'string';
};

// Check if the value is a boolean (true or false)
is.bool = function(value) {
    return typeof value === 'boolean';
};

// Check if the value is undefined
is.undef = function(value) {
    return value === undefined;
};

// Check if the value is defined (not undefined)
is.def = function(value) {
    return value !== undefined;
};

// Check if the value is an array
is.arr = function(value) {
    return Array.isArray(value);
};

// Check if the value is a plain object (not a function, array, or null)
is.obj = function(value) {
    return typeof value === 'object' && value !== null && !is.fun(value) && !is.arr(value);
};

// Check if the value is a function
is.fun = function(value) {
    return typeof value === 'function';
};

// Check if the value is truthy (not false, 0, "", null, undefined, or NaN)
is.truthy = function(value) {
    return !!value;
};

// Check if the value is falsy (false, 0, "", null, undefined, or NaN)
is.falsy = function(value) {
    return !value;
};