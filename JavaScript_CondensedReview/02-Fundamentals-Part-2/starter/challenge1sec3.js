let calcAverage = (score1, score2, score3) => (score1 + score2 + score3)/3;
console.log(calcAverage(100,100,100));

let scoreDolphins = calcAverage(44,23,71)
let scoreKoalas = calcAverage(65,54,49)

let checkWinner = (avgDolphins, avgKoalas) => {

    if (avgDolphins >= avgKoalas*2){
        console.log("Dolphins win!!");
    }else if(avgKoalas >= avgDolphins*2){
        console.log("Koalas win!!");
    }else{
        console.log("No team wins...");
    }

}

checkWinner(scoreDolphins,scoreKoalas);

scoreDolphins2 = calcAverage(85,54,41)
scoreKoalas2 = calcAverage(23,34,27)

checkWinner(scoreDolphins2,scoreKoalas2)