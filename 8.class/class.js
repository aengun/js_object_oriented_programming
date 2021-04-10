class Person {
    // sum(){ //class에서 메소드는 function키워드를 붙이지 않음
    // }

    // constructor(){ 
    //     //객체가 생성될 때, 객체의 초기 상태를 지정하기 위한 함수
    //     //객체가 생성되기 직전에 실행되도록 약속되어있음
    //     console.log('constructor');
    // }

    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }
    
}

var kim = new Person('kim', 10, 20);
console.log(kim);

// var kim = new Person('kim', 10, 20);
// kim.sum = function () {
//     return 'this : ' + (this.first + this.second);
// }
// var lee = new Person('lee', 10, 10);

// console.log("kim.sum()", kim.sum());
// console.log("lee.sum()", lee.sum());