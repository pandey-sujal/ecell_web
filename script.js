const gridContainer = document.getElementById('box3');
const colorQueue = [];
const page1=document.querySelector('.wrap1');
const page2=document.querySelector('.page2');

for (let row = 1; row <= 3; row++) {
    const rowContainer = document.createElement('div');     

    for (let col = 1; col <= 3; col++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('boxcs');
        rowContainer.appendChild(gridItem);

        gridItem.onclick = function() {
            if (row !== 3 || col !== 3) {
                this.style.backgroundColor = 'red';
                colorQueue.push(this);
            } else {
                this.style.backgroundColor = 'red';
                colorQueue.push(this);
                const allGridItems = document.querySelectorAll('.boxcs');
                processQueue();
            }
        };
    }
    gridContainer.appendChild(rowContainer);  
}

function processQueue() {
    if (colorQueue.length > 0) {
        const item = colorQueue.shift(); 
        item.style.backgroundColor = '#00407A';
        
        setTimeout(function() {
            processQueue(); 
        }, 500);
    }
}

function go_to_page1(){
  page1.style.display="block";
  page2.style.display="none";
}
function go_to_page2(){
  page1.style.display="none";
  page2.style.display="block";
}