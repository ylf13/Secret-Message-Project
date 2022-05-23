let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Remove the last string of the array secretMessage
secretMessage.pop()

// checking work by loggoing by logging the .length of the array
console.log(secretMessage.length)

// Adding words, "to" and "program" to the end of the secretMessage array
secretMessage.push(to)
secretMessage.push('Program')

// Changing the word "easily" to the word "right" by accessing the index and replacing it
secretMessage[7]='right';

// Removing the first string of the array
secretMessage.shift()

// Adding the string "Programming" to the beggining of the array
secretMessage.unshift("Programming")

// Removing the strings "get", "right", "the", "first", "time" and replacing with the string "knw"
secretMessage.splice(6,5,"know")

// On one line, use consol.log() and .join() to print the secret message as a sentence
console.log(secretMessage.join());
