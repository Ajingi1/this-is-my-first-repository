// Accessing Elements
// by ID
const heading = document.getElementById('heading');
console.log(heading);


// by class
// const heading1 = document.getElementsByClassName('heading1');
//  console.log(heading1);


// by tag name
// const heading2 = document.getElementsByTagName('h1');
// console.log(heading2);



// modifying element 
const listItems = document.querySelectorAll('#list li')
console.log(listItems);

// contents using innerHTML

heading.innerHTML = "Learning DOM manupulation";

// content sunig textcontent
heading.textContent = 'All about DOM Manipulation'

// tributes using Textcontent
heading.setAttribute('class', 'highlight');

// styles using the style property
const button = document.getElementById('btn');
button.style.backgroundColor = 'blue';
button.style.color = 'white';

// creating new element dynamically
const newPara = document.createElement('p');
newPara.textContent = 'This is a new paragraph';
document.querySelector('.container').appendChild(newPara);

// removing element dynamically
listItems[1].remove();

// Handling Events
button.addEventListener('click', addListItem);

function addListItem() {
    const newListItem = document.createElement('li');
    newListItem.innerHTML = 'New List Item';

    document.getElementById('list').appendChild(newListItem);
}

// Click Event: Triggered when an element is clicked.
// Mouseover Event: Occurs when the mouse pointer is moved over an element.
// Keydown Event: Fired when a key is pressed down.
// Submit Event: Triggered when a form is submitted.
// Load Event: Occurs when a page or an element has finished loading.
// Change Event: Fired when the value of an input element changes.
// Focus and Blur Events: These happen when an element gains or loses focus.