const num1 = 20;
const num2 = 50;
function bigger (num1, num2)
{
    console.log('The bigger one is:')
    if (num1 > num2)
    {
        console.log(num1);
    }
    if (num2 > num1) 
    {
        console.log(num2); 
    }
    else 
    {
        return console.log('something went wrong!');    
    }
}
bigger(num1, num2);

// OR YOU COULD JUST DO THIS:

function max(x,y)
{
    return x > y ? x : y;
}
console.log(max(20,50));

// OR

const max2 = (i, j) => i > j ? i : j;
console.log(max2(20, 50));