let a = 221;
//const는 변하지 않는 변수 값을 지정할 때, let은 변할 수 있는 변수 값을 지정할 때 
let b = a - 5;
let a = 4;

console.log(b, a)

const dayOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
// 변수명에 띄워쓰기 대신 대문자로 뒤의 단어 시작해줌

console.log(dayOfWeek)

// object, array 
const nicoInfo = {
    name: "Nico",
    age: 33,
    gender: 'Male',
    favMovies: ['Along the gods', 'LOTR', 'Oldboy'],
    favFood: [
        {
            name: 'Kimchi',
            fatty: false
        }, 
        {
            name: 'Cheese burger', 
            fatty: true
        }
    ]
}


nicoInfo.gender = 'Female'
// const로 되어 있어도 내용은 수정 가능
console.log(nicoInfo.gender)
console.log(nicoInfo.favFood[0].fatty)
