// // Print odd numbers in the array
// // Anonymous function

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let odd = function()
{
    for (i=0; i<=arr.length;i++)
    {
        if (arr[i]%2===1)
        {            
            console.log(arr[i]); 
        }    
       
    }
}
odd();

// Arrow Function

let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let odds = array.filter(n => n%2 === 1);
console.log(odds);

//***************------------------------*************

// Convert all strings to title caps in a String array.
// Anonymous function

let wordArr = ["heLlo", "welcomE", "softWare", "developMent"];

let newArr = wordArr.map(function(word){
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
});
console.log(newArr);

//Arrow function

let strArr = ["heLlo", "welcomE", "softWare", "developMent"];
let newArr1 = strArr.map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
console.log(newArr1);

//***************------------------------*************

//Add all the numbers in an array
//Anonymous function

let numArr = [11,22,33,44];
let sum = numArr.reduce(function(a,b){
    return a+b;
}, 0)
console.log(sum);

//Arrow Function

let arr1 = [11,22,33,44];
let sum1 = arr.reduce((a, b) => a + b, 0);
console.log(sum);

//***************------------------------*************

//Return all Prime numbers in an array
//Anonymous function

let numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

array = numArray.filter(function(number) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(array);

//Arrow Function

let num_Array = [2, 3, 4, 5, 6, 7, 8, 9, 10]

array = num_Array.filter((number) => {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(array);

//***************------------------------*************

// Return all the palindromes in an array
// Arrow function

const arrP = ['carecar', 1344, 12321, 'did', 'cannot'];
const isPalindrome = el => {
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};
const findPalindrome = arrP => {
   return arrP.filter(el => isPalindrome(el));
};
console.log(findPalindrome(arrP));

//***************------------------------*************



