                                            // JavaScript Type Conversion

// Explicit Conversion

console.log(" Number Conversion");
        let res;
        // string to number
        res = Number('100');
        console.log("string to number :",res); // 100
        // boolean to number
        res = Number(false);
        console.log("boolean to number :",res); // 0
        res = Number(' ');
        console.log("converting space to number",res); // 0
        res = Number('hello');
        console.log("converting hello to number",res); // NaN
        res = Number(undefined);
        console.log("undefined  to number :",res); // NaN


console.log("Boolean Conversion"); 
        res=Boolean(1); // true
        console.log("Numerical value '1' to Boolean : ",res);
        res= Boolean(0); // false
        console.log("Numeric value '0' to boolean : ",res);
        res= Boolean("hello"); // true
        console.log("String value 'hello' to boolean : ",res);
        res= Boolean(""); // false
        console.log("Stirng Space to Boolean : " ,res);

console.log("String Conversion");
     
        let a=90;
        res= String(a); // returns a string from a number variable a
        console.log(res);
        console.log(String(378009));// returns a string from a number literal 378009
        console.log( "Numeric '90' to string",a.toString() );
        console.log((378009).toString());

console.log("parseInt and parseFloat");
        console.log("$100 dollars : ", parseInt('$100 dollars') ); // NaN
        console.log( "+10.25990 kg : " ,parseInt('+10.25990 kg') ); // 10
        console.log( "+10.25 kg : ",parseFloat(' +10.25 kg') ); // 10.25
        console.log( "ABC :",parseFloat('ABC') ); //NaN

console.log("Implicit Conversion");
console.log("Conversion To String");
        res = '3' + 4; 
        console.log("'3' + 4 : ",res); // "34"
        res = '9' + true; 
        console.log("'9' + true : ",res); // "9true"
        res= '0' + null; 
        console.log("'0' + null : ",res); // "0null"

console.log("Conversion To Number");   
        res = '4' - '4'; 
        console.log("'4' - '4' : ",res); // 0
        res = '4' * 5;
        console.log("'4' * 5 : ",res); // 20

console.log("Boolean Conversion to Number");
        res = '5' - true;
        console.log("'5' - true : ",res); // 4
        res = 10 + false;
        console.log("10 + false",res); // 10

        res = 4 + null; // 4
        console.log("4 + null :",res);

        res = 4 - undefined;// NaN
        console.log("4 - undefined : ",res);


