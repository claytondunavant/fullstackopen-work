//arrays are objects so t is a constant pointer to the array 
const t = [1, 2, 3]

const t2 = t.map(value => '<li>' + value + '</li>')

const [first, second, ...rest] = t2

console.log(first, second)  // 1, 2 is printed
console.log(rest)          // [3, 4 ,5] is printed

//this is one of the examples of an arrow function 
/*t.forEach(value => {
    console.log(value)
}
)*/

console.log(t)
console.log(t2)