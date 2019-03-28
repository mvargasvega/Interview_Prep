//remove duplicate numbers from an array without using methods


function deleteDuplicateNumbersInArray (arrayOfNumbers){

    if(arrayOfNumbers < 1){
        return arrayOfNumbers;
    }
    let singleNumberValueArray = []
    let j = 0;

    sortNumberArrayAscending(arrayOfNumbers);

    for (let i = 0; i < arrayOfNumbers.length; i++){
        let currentNumber = arrayOfNumbers[i];
        let nextNumber = arrayOfNumbers[i+1];

        if(currentNumber != nextNumber){
            singleNumberValueArray.push(currentNumber);
            j++;
        }
    }
    return singleNumberValueArray;

}

function sortNumberArrayAscending(array){
        //bubble sort
        let length = array.length;
        for(let i = length - 1; i >= 0; i--){
            for(let j = 1; j <= i; j++){
                if(array[j-1] > array[j]){
                    let temp = array[j-1];
                    array[j-1] = array[j];// 7 = 5
                    array[j] = temp;
                }
            }
        }
        return array;
}

// console.log(deleteDuplicateNumbersInArray([1,2,2,2,3,4,5,5,5,5,5,5,5,6]));
console.log(deleteDuplicateNumbersInArray([3,4,4,4,4,-1,-1,20,3,4,4,20]));
