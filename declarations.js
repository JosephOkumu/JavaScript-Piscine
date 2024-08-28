// A constant string that includes special characters: `, \, /, " and '
const escapeStr = "`/\"'";

// A constant array that contains the values 4 (a number) and '2' (a string
const arr = [4, 2];

// A constant object with different types of values
const obj = {
    str:'Hello World',
    num: 70,
    bool: true,
    undef: undefined
};


// Another constant object that has an array and an object inside it
const nested = {
    arr:[4, undefined, '2'],
    obj : {
        str: "hello",
        num: 60,
        bool: true
    }
};


// Making the arr, obj, and nested objects immutable so their values can't be changed
Object.freeze(arr);
Object.freeze(obj);
Object.freeze(nested);
Object.freeze(nested.arr);
Object.freeze(nested.obj);
