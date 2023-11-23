$(document).ready(function () {
    let sentence = prompt("type your sentence here");
    var text = sentence;

//concatenate first and last letter,capitalize and return as new string

    function newString() {
        let value = text.charAt(0) + text.charAt(text.length - 1);
        return value.toUpperCase().toString();
    }

//reversing

   function reverseString() {
       let reversed = text.charAt(text.length - 1) + text.charAt(0);
       return reversed.toUpperCase().toString();
    }

//third function to call previous functions

    function callFunctions(){
        newString();
        reverseString();
        return text + reverseString();
    }

//to count number of letter, divide and output

 function countCharacter(){
    var characterCount = text.length;
    let indexLetter = parseInt(text.length / 2);
    return indexLetter;
 }

 //function to determine the character from the pre-called function

 function determineCharacter(){
    return countCharacter().charAt();
 }

 //to reverse the content of the string
 
 function reverse(text){
    text.split;
    return text.split('').reverse().join('');
 }
 
//function to alert and display images

 $("img").click(function() {
  alert("this is an image");
 })
})
