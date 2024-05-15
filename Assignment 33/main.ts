// Assignment 33

// Store numbers 1 through 9 in an array
let numbers : number[] = [1,2,3,4,5,6,7,8,9];

// Loop through an array

for( let num of numbers)
    {
        let suffix : string;
        if(num === 1)
            {
                suffix = "st";
                console.log(`${num}${suffix}`);
            }
            else if(num === 2)
                {
                    suffix = "nd";
                    console.log(`${num}${suffix}`);
                }
                else if(num === 3)
                    {
                        suffix = "rd";
                        console.log(`${num}${suffix}`);
                    }
                    else
                    {
                        suffix = "th";
                        console.log(`${num}${suffix}`)
                    }
    }
