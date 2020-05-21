// 作为普通函数


// 使用call apply bind
// 作为对象方法被调用


// 在class方法中调用
// 箭头函数

// this取值是在函数执行的时候确认的，不是在函数定义的时候确认的

function fn1() {
    console.log(this)
}
fn1()
fn1.call({ x: 100 }) //{x:100}


const fn2 = fn1.bind({
    x: 200
})
fn2() //{x:200}



const zhangsan = {
    name: '张三',
    sayHi() {
        console.log(this)
    },
    wait() {
        setTimeout(function() {

            //这里的this==window
            console.log(this)
        })
    }
}

const zhangsan = {
    name: '张三',
    sayHi() {
        console.log(this)
    },
    waitAgain() {
        setTimeout(() => {
            //箭头函数里的this不改变即当前对象
            console.log(this)
        })
    }
}

class People{
    constructor(name){
        this.name=name
        this.age=20
    }
    sayHi(){
        console.log(this)
    }
}

const zhangsan=new People('张三');
zhangsan.sayHi();