function add(a,b){
    return a+b;
}

const resultElement = document.getElementById("result");
const sum = add(3,4);
resultElement.textContent = sum;