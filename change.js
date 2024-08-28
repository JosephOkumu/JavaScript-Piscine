// // Define the sourceObject
// const sourceObject = {
//     name: "John Doe",
//     age: 30,
//     city: "New York"
//   };
// Define the `get` function to retrieve values from sourceObject
function get(key) {
    return sourceObject[key];
}
// Define the `set` function to update values in sourceObject and return the value
function set(key, value) {
    sourceObject[key] = value;
    return value;
}