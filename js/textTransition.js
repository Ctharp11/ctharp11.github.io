const characteristics = new Array("software engineer", "application developer", "problem solver", "learner", "gardener", "human being");

let counter= 0;
document.getElementById('characteristics').innerHTML = characteristics[counter];

function triggerChange(){
    document.getElementById('characteristics').style.opacity = 0;
    if (counter < characteristics.length - 1) {
        counter++;
    } else {
        counter = 0;
    }
    
    setTimeout(() => {
        document.getElementById('characteristics').innerHTML = characteristics[counter];
        document.getElementById('characteristics').style.opacity = 1;
    }, 750);
}
setInterval(triggerChange, 3000); 
