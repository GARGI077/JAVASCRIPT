// function returning values

var x = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}

console.log("returning value type function output ",x)

//default functions
function Show()
{
    console.log("POP MY MESSAGE in default Function");
}

Show();

//functions with parameters

function add(p,q){

    console.log("FUNCTIONS WITH parameters ",p+q)

}

add(7,9);