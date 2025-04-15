// Task 1: Check if adult based on age
function checkAge() {
    const age = parseInt(document.getElementById('ageInput').value);
    const isAdult = age >= 18;
    
    let resultHTML = `
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Is Adult:</strong> ${isAdult}</p>
        <p><strong>Result:</strong> This person is ${isAdult ? 'an adult' : 'not an adult'}</p>
    `;
    
    document.getElementById('task1Result').innerHTML = resultHTML;
}

// Task 2: Perform operations with x and y
function performOperations() {
    const x = parseFloat(document.getElementById('xInput').value);
    const y = parseFloat(document.getElementById('yInput').value);
    
    const addition = x + y;
    const multiplication = x * y;
    const modulus = x % y;
    
    let resultHTML = `
        <p><strong>x =</strong> ${x}, <strong>y =</strong> ${y}</p>
        <p><strong>Addition (x + y):</strong> ${addition}</p>
        <p><strong>Multiplication (x * y):</strong> ${multiplication}</p>
        <p><strong>Modulus (x % y):</strong> ${modulus}</p>
    `;
    
    document.getElementById('task2Result').innerHTML = resultHTML;
}

// Task 3: Check if number is even or odd
function checkEvenOdd() {
    const n = parseInt(document.getElementById('numberInput').value);
    const isEven = n % 2 === 0;
    
    let resultHTML = `
        <p><strong>Number:</strong> ${n}</p>
        <p><strong>Is Even:</strong> ${isEven}</p>
        <p><strong>Result:</strong> This number is ${isEven ? 'even' : 'odd'}</p>
    `;
    
    document.getElementById('task3Result').innerHTML = resultHTML;
}

// Task 4: Create array with numbers
function createArray() {
    const length = parseInt(document.getElementById('arrayLengthInput').value);
    let numbersArray = [];
    
    for (let i = 1; i <= length; i++) {
        numbersArray.push(i);
    }
    
    let resultHTML = `
        <p><strong>Array with numbers 1 to ${length}:</strong></p>
        <div>
    `;
    
    for (let num of numbersArray) {
        resultHTML += `<span class="array-item">${num}</span>`;
    }
    
    resultHTML += `
        </div>
        <p><strong>Array as JSON:</strong> ${JSON.stringify(numbersArray)}</p>
    `;
    
    document.getElementById('task4Result').innerHTML = resultHTML;
}

// Task 5: Square function
function square(num) {
    return num * num;
}

function squareNumber() {
    const num = parseFloat(document.getElementById('squareInput').value);
    const result = square(num);
    
    let resultHTML = `
        <p><strong>Number:</strong> ${num}</p>
        <p><strong>Square:</strong> ${result}</p>
        <p><strong>Formula:</strong> ${num} × ${num} = ${result}</p>
    `;
    
    document.getElementById('task5Result').innerHTML = resultHTML;
}

// Initialize all results on page load
window.onload = function() {
    checkAge();
    performOperations();
    checkEvenOdd();
    createArray();
    squareNumber();
};