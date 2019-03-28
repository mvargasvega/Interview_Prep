//question 2
// merge two arrays in ascending order without any methods
// arrays come already in ascending order
function ascendedArray(a,b){

    if(a.length === 0 && b.length === 0){
        return -1;
    }
    if(a.length < 0){
        return b;
    }
    if(b.length < 0){
        return a;
    }

    let j=0;
    let k=0;
    let lengthOfArray = a.length + b.length;
    let ascendedArray = []


    for (let i = 0; i < lengthOfArray; i++){
        let firstNumber = a[j];
        let secondNumber = b[k];

        if( firstNumber != undefined && secondNumber != undefined ){
            if( firstNumber < secondNumber){
                ascendedArray.push(firstNumber);
                j++;
            } else {
                ascendedArray.push(secondNumber);
                k++;
            }
        }else if( firstNumber === undefined ){
            ascendedArray.push(secondNumber);
            k++;
        }else if(secondNumber === undefined){
            ascendedArray.push(firstNumber);
            j++;
        }
    }
    return ascendedArray;
}

// equal array
let a = [-1,3,7,9];
let b = [0,2,10,15];
console.log(ascendedArray(a,b));

//a samll array
a = [-1,4];
b = [0,2,10,15];
console.log(ascendedArray(a,b));

//b small array
a = [-1,3,7,9];
b = [0,2];
console.log(ascendedArray(a,b));

//empty arry
a =[];
b =[2,3,4];
console.log(ascendedArray(a,b));
