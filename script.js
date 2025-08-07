// ========================================
// JavaScript Fundamentals Assignment
// ========================================

// ========================================
// PART 1: JavaScript Basics
// Variables, data types, operators, and conditionals
// ========================================

// Global variables to store user data
let userName = '';
let userAge = 0;
let isLoggedIn = false;

// Function to handle greeting functionality
document.addEventListener('DOMContentLoaded', function() {
    const greetBtn = document.getElementById('greetBtn');
    const checkAgeBtn = document.getElementById('checkAgeBtn');
    const basicResults = document.getElementById('basicResults');

    // Event listener for greeting button
    greetBtn.addEventListener('click', function() {
        const nameInput = document.getElementById('userName');
        userName = nameInput.value.trim();
        
        // Conditional logic for greeting
        if (userName === '') {
            basicResults.textContent = 'Please enter your name first!';
        } else if (userName.length < 2) {
            basicResults.textContent = 'Please enter a valid name (at least 2 characters).';
        } else {
            // String concatenation and template literals
            const greeting = `Hello, ${userName}! Welcome to JavaScript fundamentals.`;
            const currentTime = new Date().getHours();
            let timeGreeting;
            
            // Conditional statements for time-based greeting
            if (currentTime < 12) {
                timeGreeting = 'Good morning';
            } else if (currentTime < 18) {
                timeGreeting = 'Good afternoon';
            } else {
                timeGreeting = 'Good evening';
            }
            
            basicResults.textContent = `${timeGreeting}! ${greeting}`;
            isLoggedIn = true;
        }
    });

    // Event listener for age checking button
    checkAgeBtn.addEventListener('click', function() {
        const ageInput = document.getElementById('userAge');
        userAge = parseInt(ageInput.value);
        
        // Conditional logic with multiple operators
        if (isNaN(userAge) || userAge <= 0) {
            basicResults.textContent = 'Please enter a valid age!';
        } else if (userAge < 13) {
            basicResults.textContent = `At ${userAge} years old, you're a child. Keep learning!`;
        } else if (userAge >= 13 && userAge < 20) {
            basicResults.textContent = `At ${userAge} years old, you're a teenager. Great time to learn programming!`;
        } else if (userAge >= 20 && userAge < 65) {
            basicResults.textContent = `At ${userAge} years old, you're an adult. Perfect age for mastering JavaScript!`;
        } else {
            basicResults.textContent = `At ${userAge} years old, you're a senior. Wisdom and coding go hand in hand!`;
        }
    });
});

// ========================================
// PART 2: JavaScript Functions
// At least 2 custom functions demonstrating reusability
// ========================================

// Function 1: Calculator function with multiple operations
function performCalculation(num1, num2, operation = 'add') {
    // Input validation
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Error: Please provide valid numbers';
    }
    
    // Switch statement for different operations
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            return num2 !== 0 ? num1 / num2 : 'Error: Cannot divide by zero';
        case 'power':
            return Math.pow(num1, num2);
        default:
            return 'Error: Unknown operation';
    }
}

// Function 2: Text formatting function
function formatText(text, format = 'capitalize') {
    // Input validation
    if (typeof text !== 'string' || text.trim() === '') {
        return 'Error: Please provide valid text';
    }
    
    // Different formatting options
    switch (format) {
        case 'uppercase':
            return text.toUpperCase();
        case 'lowercase':
            return text.toLowerCase();
        case 'capitalize':
            return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        case 'title':
            return text.split(' ')
                      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                      .join(' ');
        case 'reverse':
            return text.split('').reverse().join('');
        case 'count':
            return `Text length: ${text.length} characters, Words: ${text.split(' ').length}`;
        default:
            return text;
    }
}

// Event listeners for function demonstrations
document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn');
    const formatBtn = document.getElementById('formatBtn');
    const functionResults = document.getElementById('functionResults');

    calculateBtn.addEventListener('click', function() {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        
        // Demonstrate multiple function calls
        const results = [];
        results.push(`Addition: ${num1} + ${num2} = ${performCalculation(num1, num2, 'add')}`);
        results.push(`Subtraction: ${num1} - ${num2} = ${performCalculation(num1, num2, 'subtract')}`);
        results.push(`Multiplication: ${num1} × ${num2} = ${performCalculation(num1, num2, 'multiply')}`);
        results.push(`Division: ${num1} ÷ ${num2} = ${performCalculation(num1, num2, 'divide')}`);
        results.push(`Power: ${num1} ^ ${num2} = ${performCalculation(num1, num2, 'power')}`);
        
        functionResults.textContent = results.join('\n');
    });

    formatBtn.addEventListener('click', function() {
        const text = document.getElementById('textInput').value;
        
        // Demonstrate multiple formatting options
        const results = [];
        results.push(`Original: "${text}"`);
        results.push(`Uppercase: "${formatText(text, 'uppercase')}"`);
        results.push(`Lowercase: "${formatText(text, 'lowercase')}"`);
        results.push(`Title Case: "${formatText(text, 'title')}"`);
        results.push(`Reversed: "${formatText(text, 'reverse')}"`);
        results.push(`Statistics: ${formatText(text, 'count')}`);
        
        functionResults.textContent = results.join('\n');
    });
});

// ========================================
// PART 3: JavaScript Loops
// At least 2 loop examples (for, while, forEach)
// ========================================

// Array for demonstration
const sampleArray = ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js', 'Python', 'Git'];
const colors = ['red', 'green', 'blue', 'purple', 'orange'];

document.addEventListener('DOMContentLoaded', function() {
    const forLoopBtn = document.getElementById('forLoopBtn');
    const whileLoopBtn = document.getElementById('whileLoopBtn');
    const arrayLoopBtn = document.getElementById('arrayLoopBtn');
    const loopResults = document.getElementById('loopResults');

    // Loop Example 1: For Loop
    forLoopBtn.addEventListener('click', function() {
        const count = parseInt(document.getElementById('loopCount').value) || 5;
        let results = [`For Loop Demo - Counting to ${count}:\n`];
        
        // Classic for loop
        for (let i = 1; i <= count; i++) {
            if (i % 2 === 0) {
                results.push(`${i} is even`);
            } else {
                results.push(`${i} is odd`);
            }
        }
        
        // For loop with array
        results.push('\nFor Loop with Array (first 5 technologies):');
        for (let i = 0; i < Math.min(5, sampleArray.length); i++) {
            results.push(`${i + 1}. ${sampleArray[i]}`);
        }
        
        loopResults.textContent = results.join('\n');
    });

    // Loop Example 2: While Loop
    whileLoopBtn.addEventListener('click', function() {
        const count = parseInt(document.getElementById('loopCount').value) || 5;
        let results = [`While Loop Demo - Countdown from ${count}:\n`];
        
        // While loop countdown
        let counter = count;
        while (counter > 0) {
            if (counter === 1) {
                results.push(`${counter} - Blast off! 🚀`);
            } else {
                results.push(`${counter}...`);
            }
            counter--;
        }
        
        // While loop with condition
        results.push('\nWhile Loop - Finding powers of 2:');
        let power = 1;
        let exponent = 0;
        while (power <= 1000) {
            results.push(`2^${exponent} = ${power}`);
            exponent++;
            power = Math.pow(2, exponent);
        }
        
        loopResults.textContent = results.join('\n');
    });

    // Loop Example 3: Array Methods (forEach, map, filter)
    arrayLoopBtn.addEventListener('click', function() {
        let results = ['Array Loop Demonstrations:\n'];
        
        // forEach loop
        results.push('1. forEach Loop - Technologies:');
        sampleArray.forEach((tech, index) => {
            results.push(`   ${index + 1}. ${tech} (${tech.length} characters)`);
        });
        
        // map method
        results.push('\n2. Map Method - Uppercase technologies:');
        const upperTech = sampleArray.map(tech => tech.toUpperCase());
        upperTech.forEach(tech => results.push(`   • ${tech}`));
        
        // filter method
        results.push('\n3. Filter Method - Technologies with more than 4 characters:');
        const longTech = sampleArray.filter(tech => tech.length > 4);
        longTech.forEach(tech => results.push(`   • ${tech}`));
        
        // for...of loop
        results.push('\n4. For...of Loop - Adding emojis:');
        const emojis = ['💻', '🌐', '🎨', '⚛️', '🟢', '🐍', '📁'];
        let emojiIndex = 0;
        for (const tech of sampleArray) {
            results.push(`   ${emojis[emojiIndex]} ${tech}`);
            emojiIndex++;
        }
        
        loopResults.textContent = results.join('\n');
    });
});

// ========================================
// PART 4: DOM Manipulation
// At least 3 DOM interactions
// ========================================

let currentColorIndex = 0;
let elementCounter = 0;

document.addEventListener('DOMContentLoaded', function() {
    // DOM Interaction 1: Change background color
    const changeColorBtn = document.getElementById('changeColorBtn');
    changeColorBtn.addEventListener('click', function() {
        const body = document.body;
        body.className = `bg-${colors[currentColorIndex]}`;
        changeColorBtn.textContent = `Changed to ${colors[currentColorIndex]}! Click for next color`;
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    });

    // DOM Interaction 2: Toggle visibility
    const toggleVisibilityBtn = document.getElementById('toggleVisibilityBtn');
    const toggleContent = document.getElementById('toggleContent');
    toggleVisibilityBtn.addEventListener('click', function() {
        if (toggleContent.classList.contains('hidden')) {
            toggleContent.classList.remove('hidden');
            toggleVisibilityBtn.textContent = 'Hide Content';
            toggleContent.style.display = 'block';
        } else {
            toggleContent.classList.add('hidden');
            toggleVisibilityBtn.textContent = 'Show Content';
            toggleContent.style.display = 'none';
        }
    });

    // DOM Interaction 3: Add new elements dynamically
    const addElementBtn = document.getElementById('addElementBtn');
    const dynamicContent = document.getElementById('dynamicContent');
    addElementBtn.addEventListener('click', function() {
        elementCounter++;
        
        // Create new element
        const newElement = document.createElement('div');
        newElement.className = 'dynamic-item';
        newElement.innerHTML = `
            <span>Dynamic Element #${elementCounter} - Created at ${new Date().toLocaleTimeString()}</span>
            <button onclick="this.parentElement.remove()" style="background: rgba(255,255,255,0.2); border: none; color: white; padding: 0.25rem 0.5rem; border-radius: 4px; cursor: pointer;">Remove</button>
        `;
        
        // Add to DOM
        dynamicContent.appendChild(newElement);
        
        // Update button text
        addElementBtn.textContent = `Add Element (${elementCounter} created)`;
    });

    // DOM Interaction 4: Remove elements
    const removeElementBtn = document.getElementById('removeElementBtn');
    removeElementBtn.addEventListener('click', function() {
        const dynamicItems = dynamicContent.querySelectorAll('.dynamic-item');
        if (dynamicItems.length > 0) {
            // Remove the last element
            dynamicItems[dynamicItems.length - 1].remove();
            elementCounter = Math.max(0, elementCounter - 1);
            removeElementBtn.textContent = `Removed! (${dynamicItems.length - 1} remaining)`;
        } else {
            removeElementBtn.textContent = 'No elements to remove!';
            setTimeout(() => {
                removeElementBtn.textContent = 'Remove Last Element';
            }, 2000);
        }
    });

    // Additional DOM manipulation: Add hover effects dynamically
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        section.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px) scale(1)';
        });
    });

    // DOM Interaction 5: Keyboard event handling
    document.addEventListener('keydown', function(event) {
        // Easter egg: Press 'J' for JavaScript facts
        if (event.key.toLowerCase() === 'j') {
            const facts = [
                'JavaScript was created in just 10 days!',
                'JavaScript is not related to Java despite the name.',
                'JavaScript can run on both client and server side.',
                'JavaScript is the most popular programming language.',
                'JavaScript supports functional programming paradigms.'
            ];
            const randomFact = facts[Math.floor(Math.random() * facts.length)];
            alert(`💡 JavaScript Fact: ${randomFact}`);
        }
    });
});

// ========================================
// Additional utility functions
// ========================================

// Function to log all activities (demonstrating console usage)
function logActivity(activity) {
    const timestamp = new Date().toLocaleString();
    console.log(`[${timestamp}] ${activity}`);
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    logActivity('JavaScript Fundamentals Assignment loaded successfully!');
    console.log('🚀 Welcome to the JavaScript Fundamentals Assignment!');
    console.log('📝 This demonstrates:');
    console.log('   • Variables and conditionals');
    console.log('   • Custom functions');
    console.log('   • Various loop types');
    console.log('   • DOM manipulation');
    console.log('💡 Press "J" anywhere on the page for JavaScript facts!');
});
