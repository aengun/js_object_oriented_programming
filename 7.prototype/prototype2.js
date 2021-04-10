function Person(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
}

// Person생성자의 sum메소드의 원형 만들기
// 한 번만 실행되므로 성능절약, 메모리 절약

Person.prototype.sum = function () {
    return 'prototype : ' + (this.first + this.second);
}

var kim = new Person('kim', 10, 20);
kim.sum = function () {
    return 'this : ' + (this.first + this.second);
}
var lee = new Person('lee', 10, 10);

console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());

// kim의 경우 
// kim.sum을 호출하면 
// 객체 자신이 sum이라는 속성이 있는지를 찾는다.
// 이 때 15줄이 호출되고 끝
// lee의 경우
// 객체 생성이후 sum을 정의 한 적 없다.
// 객체의 생성자인 Person의 prototype에서 sum이라는 메소드가
// 정의되어 있는지를 찾고 그것을 사용한다.