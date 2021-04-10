var superObj = {
    superVal: 'super'
};

// var subObj = {
//     subVal : 'sub'
// };
// subObj.__proto__ = superObj;

var subObj = Object.create(superObj);
// 'superObj를 부모로하는 객체' 라는 의미
subObj.subVal = 'sub';
// 5 ~ 8줄의 코드와 10 ~ 12의 코드가 동일
debugger;

console.log(subObj.subVal);
console.log(subObj.superVal);

subObj.superVal = 'sub';
console.log(superObj.superVal);

var kim = {
    name: 'kim',
    first: 10,
    second: 20,
    sum: function () {
        return this.first + this.second;
    }
}

// var lee = {
//     name: 'lee',
//     first: 10,
//     second: 10,
//     avg: function () {
//         return (this.first + this.second) / 2;
//     }
// }
// lee.__proto__ = kim;

// 위와 같은 방법
var lee = Object.create(kim);
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg = function () {
    return (this.first + this.second) / 2;
}

console.log(kim.sum());
console.log(lee.sum());
console.log(lee.avg());