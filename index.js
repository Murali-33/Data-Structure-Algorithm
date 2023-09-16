//1.Reverse a String With Built-In Functions

// function reverseStr(str){
//   // var splitStr = str.split("");
//   // var revStr = splitStr.reverse();
//   // var joinStr = revStr.join("")
//   var joinStr = str.split("").reverse().join("");
//   return joinStr
// }
// console.log(reverseStr("Murali"));


//2 Print the string 

// function printStr(str){
//   var name = "murali";
//   // for(letter of name){
//   //   console.log(letter);
//   // }
//   for(let i =0 ; i<name.length;i++){
//     console.log(i,name[i])
//     if(i >=name.length){
//       break;
//     }
//   }
//    return name;
// };
// printStr();


//3.Total of the given Array

// const num =(number)=>{
//   var sum =0;
//    var number = [1,2,3,4,5,6,7,8,9]
//    for(let i=0;i<number.length;i++){
//      sum = sum + i;
//    }
//    console.log(sum);
//    return sum;
// }
// num();

//4. Write a program to check if a string or word or number is palindrome ?

//METHOD 1:
//  const palindrome =(str)=>{
//     var word = prompt("please enter the string ?")
//     strRev = word.split("").reverse().join("");
//     if(strRev == word){
//       console.log("Its a palindrome")
//     }else{
//       console.log("its not a palindrome");
//     }
//     return str
//  }
//  palindrome()


// 5. Write a program to get total vowel count from String ?
// const getVowelCount =(str)=>{
//   let Vcount = 0;
//   var word = prompt("Please enter the Text");
//   for(letter of word){
//     if (letter == "a"||letter == "e"||letter =="i"||letter =="o"||letter =="u"){
//        Vcount += 1;
//     }else{
//       Vcount = Vcount
//     }
//   }
//   console.log(Vcount);


//6.Write a program to prints factorial of any number ? X with promise

// const factorial =()=>{
//   var num = prompt("Please enter number to find the  factorial");
//   var fact = 1;
//   for(let i=1 ;i<=num;i++){
//     fact *=i
//   }
//   return new Promise ((resolve,reject)=>{
//     if(fact ==120){
//       resolve("sucess")
//     }else{
//       reject(Error("please enter 5"))
//     }
//   }).then((message)=>{
//      console.log("sucess");
//   }).catch((message)=>{
//     console.log("failed");
//   })
// }
// factorial();
//   return Vcount
// }
// getVowelCount();
