/*----- constants -----*/ 



/*----- app's state (variables) -----*/ 
let sum;


/*----- cached element references -----*/ 
let inpEl = document.querySelector('.input')
let countEl = document.querySelector('.total')



/*----- event listeners -----*/ 
document.querySelector('.add').addEventListener('click', add)
document.querySelector('.subtract').addEventListener('click', subtract)



/*----- functions -----*/
init()

function init() {
    sum = 0;
    inpEl.value = 1;

render();
}

function render() {
    countEl.innerHTML = sum;
    countEl.style.color = sum < 0 ? 'red' : 'black';
}

function add() {
    sum += parseFloat(inpEl.value);
    
  render();
}

function subtract() {
    sum -= parseFloat(inpEl.value);

    render();
}
