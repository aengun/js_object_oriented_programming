var memberArray = ['egoing', 'graphittie', 'leezhce'];
console.log("memberArray[2]", memberArray[2]);

var memberObject = {
    manager:'egoing',
    developer:'graphittie',
    designer:'leezhce'
}

console.log("memberObject.designer", memberObject.designer);
console.log("memberObject['designer']", memberObject['designer']);
memberObject.designer = 'leeJulia'; // 값을 업데이트
console.log("memberObject.designer", memberObject.designer);
delete memberObject.manager; //원소 삭제 방법
console.log("memberObject.manager", memberObject.manager); //undefined