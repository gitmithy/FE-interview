// 类型判断 -instanceof
Std1 instanceof Student //true
Std1 instanceof People //true
Std1 instanceof Object //true

// [] instanceof Array //true
// [] instanceof Object//true

// {} instanceof Object//true

typeof People //function
typeof Student //function


// 隐式原型和显示原型
console.log(Std1.__proto__)
console.log(Student.prototype)
console.log(Std1.__proto__ === Student.prototype) //true

// 原型关系
// 每个class都有显式原型prototype
// 每个实例都有隐式原型__proto__
// 实例的__proto__指向对应class的prototype

// 基于原型的执行规则
// 获取属性Std1.name或执行方法Std1.sayHi()时
// 先在自身属性和方法寻找
// 如果找不到则自动去__proto__中查找

// 原型链
console.log(Student.prototype.__proto__)
console.log(People.prototype)
console.log(People.prototype === Student.prototype.__proto__) //true

Std1.hasOwnProperty('eat'); //false