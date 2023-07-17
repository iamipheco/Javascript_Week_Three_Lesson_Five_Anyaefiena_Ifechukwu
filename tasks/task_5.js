// Filter elements in an array
// Create an array with multiple elements.
// Use the filter() method to create a new array containing only specific elements based on a condition.
// Log the filtered array to the console.

const nameOfGirls = ['Chidimma', 'Tochi', 'Chizoba', 'Chiamaka', 'Clementina', 'Deborah'] // Created an array with multiple elements.
const girlsNameThatStartWithC = nameOfGirls.filter(isGirlName => isGirlName.startsWith('C')) // Use the filter() method to create a new array containing only specific elements with  a condition to list name of girls that start with C.
console.log(girlsNameThatStartWithC) // Log the filtered array to the console : Output as [ 'Chidimma', 'Chizoba', 'Chiamaka', 'Clementina' ]
