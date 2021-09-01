// Gotta get the values on button click.
//here is our starting function
function getValues(){
    //ok this should get the values. 
    let firstValue = document.getElementById("hey").value;
    let secondValue = document.getElementById("yo").value;
    //Values to Integers
    firstValue = parseInt(firstValue);
    secondValue = parseInt(secondValue);
    //If these numbers are intgers then run the generate code:
    if (Number.isInteger(firstValue) && Number.isInteger(secondValue)) {
        //generate:
        numbers = generateNumbers(firstValue, secondValue);
        //display
        displayNumbers(numbers);
    } else {
        //If not then ping an error. 
        alert("Please only enter numbers.")
    }
    
}
function generateNumbers(fV, sV) {
    //create an array.
    let numbers = [];
    //for loop to generate the numbers from start to end, from fV or first value to sV or ending value.
    for (let index = fV; index <= sV; index++) {
        //pump the values into the array I just made, numbers. 
        numbers.push(index);
        
    }
    //ok now that thats done gimme my finished array plz. 
    return numbers;
}
function displayNumbers(numbers){
    //this is where we'll pump the numbers of the array into the html.
    let resultHtml = '<tr>';    
    //Itterate over the array and highlight divisible by 3s and 5s
    for (let index = 0; index < numbers.length; index++) {
        //define the index:
        let number = numbers[index];
        let className = "even";
        //create the str for hey.
        let hey = 'hey';
        //create the str for yo.
        let yo = 'yo';   
        //creat the str for heyo.
        let heyo = 'heyo';

         
        if (number % 3 == 0 && number % 5 == 0) {
            number = heyo;
            className = "both";
        }
        else if (number % 5 == 0) {
            number = yo;      
            className = "five";           
        }
        else if (number % 3 == 0) {
            number = hey;         
            className = "three";   
        }         
        if (index % 4 == 0 && index != 0) {
                resultHtml += '</tr>';
                resultHtml += '<tr>';
            } 
            resultHtml += `<td class="${className}">${number}</td>`;            
                     
    }
    document.getElementById("results").innerHTML = resultHtml;
}


// ORIGINAL
// function displayNumbers(numbers){
//     //this is where we'll pump the numbers of the array into the html.
//     let resultHtml = "";
//     //Itterate over the array and highlight divisible by 3s and 5s
//     for (let index = 0; index < numbers.length; index++) {
//         //define the index:
//         let number = numbers[index];
//         let className = "even";
//         //create the str for hey.
//         let hey = 'hey';
//         //create the str for yo.
//         let yo = 'yo';   
//         //creat the str for heyo.
//         let heyo = 'heyo';

         
//         if (number % 3 == 0 && number % 5 == 0) {
//             number = heyo;
//             className = "both";
//         }
//         else if (number % 5 == 0) {
//             number = yo;      
//             className = "five";           
//         }
//         else if (number % 3 == 0) {
//             number = hey;         
//             className = "three";   
//         }
        
//         resultHtml += `<tr><td class="${className}">${number}</td></tr>`;        
//     }
//     document.getElementById("results").innerHTML = resultHtml;
// }