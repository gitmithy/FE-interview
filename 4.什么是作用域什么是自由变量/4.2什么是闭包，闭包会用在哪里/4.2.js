console.log('closure')

function create() {
    let a = 100;
    return function() {
        console.log(a)
    }
}
let fn = create();
let a = 200;
fn()