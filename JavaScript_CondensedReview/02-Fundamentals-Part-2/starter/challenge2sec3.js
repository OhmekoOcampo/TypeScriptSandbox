let calcTip = (bill) => {
    if (bill >= 50 && bill <= 300){
        return bill*0.15
    }else{
        return bill*0.20
    }
}

console.log(calcTip(100))

let bills = [125, 555, 44];
let tips = [calcTip(125),calcTip(555),calcTip(44)];
let totals = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];

console.log(tips)
console.log(totals)