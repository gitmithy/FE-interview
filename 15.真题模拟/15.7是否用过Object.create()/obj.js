const obj1={
    a:10,
    b:20,
    sum(){
        return this.a+this.b
    }
}

const obj2=new Object({
    a:10,
    b:20,
    sum(){
        return this.a+this.b
    }    
})

// const obj3=new Object(obj1)

// obj2===obj1//false
// obj3===obj1//true


const obj4=Object.create(null)
const obj5=new Object()

const obj6=Object.create({
    a:10,
    b:20,
    sum(){
        return this.a+this.b
    }
})

const obj7=Object.create(obj1)

// new Object创建的方式相等
// 用Object.create创建不相等，但隐式，即__proto__相等

