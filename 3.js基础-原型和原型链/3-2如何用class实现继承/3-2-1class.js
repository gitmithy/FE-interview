class Student {
    constructor(name, number) {
        this.name = name;
        this.number = number;
        // this.gender = 'male';
    }
    sayHi() {
            // 反引号变量加文字写法
            console.log(
                    `姓名${this.name}.学号${this.number}`
                    // `网站名称是${webName},已经${webName}岁了`
                )
                // console.log(
                //     '姓名' + this.name + '.学号' + this.number
                // )
        }
        // study() {

    // }
}
const xialuo = new Student('夏洛', 100);
console.log(xialuo.name);
console.log(xialuo.number);
xialuo.sayHi();

const madongmei = new Student('马冬梅', 100);
madongmei.sayHi();