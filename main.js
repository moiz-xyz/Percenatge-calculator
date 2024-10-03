
let input = parseInt( prompt ("Enter your  obtained marks") );
let secod_input = parseInt( prompt (" Enter your total marks") );
let percent = input/secod_input * 100;
if (input > secod_input){
    alert("Obtained Marks cannot be greator than total marks")
} else{
    alert(percent);
}