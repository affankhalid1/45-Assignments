// Assignment 37

// Define the make_shirt function with default parameters
function make_shirt(size:string = "Large", Text_message:string = "I love TypeScript")
{
    // Print a sentence summarizing the size of the shirt and the message printed on it
    console.log(`You ordered a ${size}-sized T-Shirt with the message: ${Text_message}`)
}

// Call the function to make a large shirt with the default message
make_shirt();

// Call the function to make a Medium shirt with the default message
make_shirt("Medium");

// Call the function to make a shirt of any size with the default message
make_shirt("Small","I love JavaScript");