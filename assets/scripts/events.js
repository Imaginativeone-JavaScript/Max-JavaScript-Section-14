const button = document.querySelector('button');

// button.onclick = function() {

// }

const buttonClickHandler = () => {
    alert('Button Clicked!');
}

button.onclick = buttonClickHandler;
