document.write("04_type_conversion.js is linked");
let num1 = 5;
console.log("num1 is a " + typeof(num1))
let num2 = 3;
console.log("num2 is a " + typeof(num2))
let text1 = "10";
console.log("text1 is a " + typeof(text1))
let text2 = "2";
console.log("text2 is a " + typeof(text2))

// Follow the directions below.  Do not change the code above this line.

//1.  Write a console log statement to log the result of num1 multiplied by text1
console.log(num1 * text1);

//2.  Use typeof() to check the data type of the result of the calculation you performed in step 1 and log it 
// to the console
console.log(typeof(num1 * text1));

//3.  Write a console log statement to log the result of text1 multiplied by text2
console.log(text1 * text2);

//4.  Use typeof() to check the data type of the result of the calculation you performed in step 3 and log it 
// to the console
console.log(typeof(text1 * text2));

//5.  Write a console log statement to log the result of text1 added to text2
console.log(text1 + text2);

//6.  Use typeof() to check the data type of the result of the calculation you performed in step 5 and log it 
// to the console
console.log(typeof(text1 + text2));

//7.  Write a console log statement to log the result of num1 added to num2
console.log(num1 + num2);

//8.  Use typeof() to check the data type of the result of the calculation you performed in step 7 and log it 
// to the console
console.log(typeof(num1 + num2));

//9.  Write a console log statement to log the result of text1 added to num1  
console.log(text1 + num1);

//10.  Use typeof() to check the data type of the result of the calculation you performed in step 9 and log it 
// to the console
console.log(typeof(text1 + num1));

//11.  Use the Number() method to convert text1 to a number and save the result to the variable converted1.  
// Log converted1 and its type to the console.
let converted1 = Number(text1);
console.log(converted1);
console.log(typeof(converted1));

//12. Repeat the calculation you performed in step 10, this time adding converted1 to num1.  
// Log the result and its data type to the console.
console.log(converted1 + num1);
console.log(typeof(converted1 + num1));

//13.  Use the toString method to convert num1 to a string.  Log the result and its data type to the console.
let stringNum = num1.toString();
console.log(stringNum);
console.log(typeof(stringNum));
