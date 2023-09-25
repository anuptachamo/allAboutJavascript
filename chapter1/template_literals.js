
/* `Template Literals`
 ?Template Literals are the literals that allow us to embed expressions, usually in the string.
 *Backticks (`) are used in order to perform template interpolation.
 * useful things that can be achieved are:
        -Multiline Strings
        - Direct variable usage.
        - easily hookup an expression.
        and make far more easy to read and understand the code.

*/

let firstname = "Anup";
let lastname = "Tachamo";

//* concatenation
// let fullname = (firstname +" " +  lastname);

//* Template literals  -- `${Expressions}`
let fullname = `My name is ${firstname.toUpperCase()}  ${lastname.toLowerCase()}`;


console.log(fullname)