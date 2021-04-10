class Person {
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum() {
        return (this.first + this.second);
    }
}

class PersonPlus extends Person {
    constructor(name, first, second, third) {
        // super(); : 부모 클래스의 생성자
        super(name, first, second);
        this.third = third;
    }
    sum() {
        return (super.sum() + this.third);
    }
    avg() {
        return (this.first + this.second + this.third) / 3;
    }
}

var kim = new PersonPlus('kim', 10, 20, 30);
console.log(kim.sum());
console.log(kim.avg());