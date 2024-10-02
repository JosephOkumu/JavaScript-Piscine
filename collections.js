// Convert Array to Set (removes duplicates)
function arrToSet(arr) {
    return new Set(arr);
}

function arrToStr(arr) {
    return arr.join('');
}

function setToArr(set) {
    return Array.from(set);
}

// Convert Set to string (converts Set to Array first, then joins into string)
function setToStr(set) {
    return setToArr(set).join('');
}


function strToArr(str) {
    return str.split('');
}

// Convert string to Set (removes duplicate characters from a string)
function strToSet(str) {
    return new Set(strToArr(str));
}

// Convert Map to Object (turns a Map into a plain JavaScript object)
function mapToObj(map) {
    return Object.fromEntries(map);
}

// Convert Object to Array (extracts values from the object)
function objToArr(obj) {
    return Object.values(obj);
}

// Convert Object to Map (turns an object into a Map)
function objToMap(obj) {
    return new Map(Object.entries(obj));
}

// Convert Array to Object (turns an array into an object where indexes are keys)
function arrToObj(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[i] = arr[i];
    }
    return obj;
}

// Convert string to Object (turns a string into an object where indexes are keys)
function strToObj(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        obj[i] = str[i];
    }
    return obj;
}

// Function to determine the specific type of a value
function superTypeOf(value) {
    if (value === null) {
        return 'null';
    } else if (Array.isArray(value)) {
        return 'Array';
    } else if (value instanceof Map) {
        return 'Map';
    } else if (value instanceof Set) {
        return 'Set';
    } else if (typeof value === 'object') {
        return 'Object';
    } else if (typeof value === 'function') {
        return 'Function';
    } else if (typeof value === 'number') {
        return 'Number';
    } else if (typeof value === 'string') {
        return 'String';
    } else if (typeof value === 'boolean') {
        return 'Boolean';
    } else if (typeof value === 'undefined') {
        return 'undefined';
    } else {
        return 'Unknown';
    }
}


