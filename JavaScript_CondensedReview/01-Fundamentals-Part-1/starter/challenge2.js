let massMark = 78
let heightMark = 1.69
let massJohn = 120
let heightJohn = 1.95

let BMIMark = massMark / (heightMark**2)
let BMIJohn = massJohn / (heightJohn**2)

console.log(BMIMark)
console.log(BMIJohn)

if(BMIMark > BMIJohn){
    console.log(`Mark's BMI (${BMIMark}) is higher than John's of (${BMIJohn})!`)
}else{
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's of (${BMIMark})!`)
}