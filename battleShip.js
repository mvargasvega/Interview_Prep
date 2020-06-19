const  alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const setUpGrid = (size) => {
    let grid =[];
    for( let i=0; i< size; i++){
        grid.push([]);
        for( let j=0 ; j < size; j++){
            grid[i].push('o');
        }
    }
    return grid;
}

const convertShipStrToArr = (ships) => {
    let shipObj ={}
    let id=0;
    ships.map( ship=>{
        let tempArr = ship.split(" ");
        let topLeftNum = tempArr[0].charAt(0);
        let topLeftLetter =tempArr[0].charAt(1);
        let bottomRightNum =tempArr[1].charAt(0);
        let bottomRightLetter =tempArr[1].charAt(1);
        if(topLeftLetter === bottomRightLetter){
            shipObj[id] = []
            // find how many coordinates to add for a ship
            for(let i =topLeftNum;i <=bottomRightNum ; i++){
                shipObj[id].push(i+topLeftLetter);
            }
            id++;
        }else{
        //    make a 2 by 2 square
            shipObj[id] = []
        //    left two squares
            shipObj[id].push(tempArr[0]);
            shipObj[id].push((parseInt(topLeftNum) + 1) + topLeftLetter);
            //    right two squares
            shipObj[id].push((bottomRightNum -1) + bottomRightLetter);
            shipObj[id].push(tempArr[1]);
            id++;
        }
    })
    return shipObj;
}

const solution = (N, S, T) => {
    let hitShipNum=0;
    let sunkShipNum = 0;
    //set up grid
     let grid = setUpGrid(N);
    //mark ship's position
   let shipObj = convertShipStrToArr(S.split(","));
   console.log(shipObj);
   //map through hit's
   let hitCoordinates = T.split(' ');
   console.log(hitCoordinates)
    for (let [key, value] of Object.entries(shipObj)) {
        for(let i=0;i < value.length; i ++){
            if(hitCoordinates.find(el => el === value[i])){
                shipObj[key].splice(value.indexOf(value[i]),1);
                i--;
            }
        }
        if(value.length === 0){
            sunkShipNum++;
        }else {
            hitShipNum++;
        }
        console.log(value);
    }
    return hitShipNum + "," +sunkShipNum;
}

let gridSize = 4;
let ships = "1B 2C,2D 4D";
let shipsHit = "2B 2D 3D 4D 4A";

console.log(solution(gridSize,ships,shipsHit));







