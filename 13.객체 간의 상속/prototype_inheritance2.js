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