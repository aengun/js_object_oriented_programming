var kim = {
    name: 'kim',
    first: 10,
    second: 20,
    third: 30,
    sum: function () {
        return this.first + this.second + this.third;
    }
}

var lee = {
    name: 'lee',
    first: 10,
    second: 10,
    third: 10,
    sum: function () {
        return this.first + this.second + this.third;
    }
}

console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());

var d1 = new Date('2021-4-10');
console.log(d1.getFullYear());
console.log(d1.getMonth());

console.log(Date);

function Person() {
    this.name = 'kim';
    this.first = 10;
    this.second = 20;
    this.third = 30;
    this.sum = function () {
        return this.first + this.second + this.third;
    }
}

console.log('Person()', Person());
console.log('new Person()', new Person());
