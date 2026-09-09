bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

let tips = []
let totals = []

let calcTip = (bill) => {
    if (bill >= 50 && bill <= 300){
        return bill*0.15
    }else{
        return bill*0.20
    }
}

for(let i=0; i < bills.length; i++){
    tips.push(calcTip(bills[i]));
}

for(let i=0; i < tips.length; i++){
    totals.push(tips[i]+bills[i])
}

console.log(totals)

function calcAverage(arr) {
    let sum = 0
    for(let i=0;i < arr.length;i++){
        sum += arr[i]
    }
    return sum/(arr.length)
}

console.log(calcAverage(totals));