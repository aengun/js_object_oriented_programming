function Person(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.sum = function () {
        return this.first + this.second;
    }
    // 이 부분도 문제
    // 생성 할 때마다 메소드가 메모리에 할당되어 비효율적
}

// 생성자 안에서 메소드를 갖는 것의 단점
// : 1억명의 sum메소드를 수정하려면 1억번 할 것인가??
var kim = new Person('kim', 10, 20);
kim.sum = function () {
    return 'modified : ' + (this.first + this.second);
}

var lee = new Person('lee', 10, 10);
lee.sum = function () {
    return 'modified : ' + (this.first + this.second);
}

console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());