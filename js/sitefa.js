function getValues() {
    let inputString = document.getElementById('userString').value;
    let result = checkForPalindrome();
    displayResults(result);
}

function checkForPalindrome(inputString) {
    inputString = inputString.toLowerCase();
    inputString.replace(" ", "");
    let reverseString = "";

    for (let i = inputString.length - 1; i >=  0; i--) {
        reversedString += inputString[i];


    }


    if (inputString == reversedString) {
        return true;
    } else { 
        return false;
    }
}

function displayResults(result) {

    let alert = document.getElementById('alert');
    alert.classList.remove('alert-danger')
    alert.classList.remove('alert-success')

    let messageElement = document.getElementById('message');

    
        if (result == true) {
            alert.classList.add('alert-success')
      
            messageEleemnt.textContent = "Congrats! It's a palindrome!";
        } else {
            alert.classList.add('alert-danger')

            messageElement.textContent = "Oh no! It's not a palindrome!";

        }

        alert.classList.remove('invisible')
}









