// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

const diamond = (n) => {
    // get the length of the word for the rows we will have for the diamond
    if(n % 2 == 0 || n < 0)
    {
        console.log("not a odd number and/or neg")
    }

    return n;
}

diamond(3)
diamond(-3)
diamond(4)