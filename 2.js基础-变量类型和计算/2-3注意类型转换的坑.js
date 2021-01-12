const a = 100 + 10 //110
const b = 100 + '10' //10010
const c = true + '10' //true10

// ==运算符  ==会发生类型转换，尽量转换之后相等
100 == '100' //true
0 == '' //true
0 == false //true
false == '' //true
null == undefined //true
    // 除了==null之外，其他的一律用===，例如
const obj = { x: 100 }
if (obj.a == null) {

}
// 相当于if(obj.a===null||obj.a===undefined)

// if语句和逻辑运算
// truly变量:!!a===true的变量  经过!!两步运算后为true的变量
// falsely变量:!!a===false的变量  经过!!两步运算后为false的变量

// 以下是falsely变量，除此之外都是truly变量
!!0 === false;
!!NaN === false;
!!'' === false;
!!null === false;
!!undefined === false;
!!false === false;

// if语句
const a = true;
if (a) {

}
const b = 100;
if (b) {

}

// falsely变量
const c = '';
if (c) {

}
const d = null;
if (d) {

}
let e
if (e) {

}

// 逻辑判断
console.log(10 && 0) //0  10是一个truly变量  0是一个falsely变量 //0是truly，继续返回第二个值
console.log(0 && 10) //0  10是一个truly变量  0是一个falsely变量 //0是falsely，直接返回
console.log('' || 'abc') //abc是一个truly变量
console.log('abc' || '') //abc是一个truly变量
console.log(!window.abc) //true