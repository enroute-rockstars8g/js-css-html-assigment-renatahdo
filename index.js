const calculateFibonacci = () => {
    const numberFibo = parseInt(document.getElementById("numberFibonacci").value);

    if(numberFibo == 0){
        document.getElementById("numbersFibonacci").innerHTML ="<span>" + 0 + "</span>";
    } else if (numberFibo == 1){
        document.getElementById("numbersFibonacci").innerHTML ="<span>" + 1 + "</span>";
    } else {
        let i = 0;
        let array = [];
        let result;
        for (i; i<numberFibo; i++){
            if(i == 0){
                array.push(0);
            }
            else if(i == 1){
                array.push(1);
            }
            else {
                array.push(array[i - 1] + array[i - 2]);
            }
            if(i == numberFibo - 1){
                result = array[i];
            }
        }
        document.getElementById("numbersFibonacci").innerHTML ="<span>"+ result +"</span>";
    }
}

const calculateFactorial = () => {
    const numberFactorial = parseInt(document.getElementById("numberFactorial").value);
    const numbersNode = document.getElementById("numbersFactorial");

    let i, result = 1;
    for(i = 1; i <= numberFactorial; i++)  
        result = result * i;
    i = i - 1;

    let text = result.toString();
    let array = text.split("");

    console.log(array);

    for (let i = 0; i < array.length; i++) {
        const mySpan = document.createElement("span");
        mySpan.innerHTML = array[i];
        numbersNode.appendChild(mySpan);
    }
}