//question 1 fizz buzz
// fizz multiple of 3
//buzz mulitple of 5
//fizz buzz multiple of both 5 & 3

function fizzBuzz(){
    for (let i = 0; i <= 100; i++){

        if(i % 3 === 0 && i % 5 === 0){
            console.log("fizz buzz");

        }else if (i % 3 === 0){
            console.log("fizz");

        }else if (i % 5 === 0){
            console.log("buzz");

        }else {
            console.log(i);
        }
    };
};

fizzBuzz();
