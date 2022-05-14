// função em JS é First-class object (citizens)
// high-order function

// criar de forma literal 
function fun1() {}

// armazenar em uma variável
const fun2 = function f2(){}

// armazenar em um array
let array = [fun1, fun2, function fun3(a, b) {return a+b}]
console.log(array[2](40, 2))

// armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Marrapais'}
console.log(obj.falar());

// passar função como parâmetro
function run(fun) {
    fun()
}

run(function() {console.log('Executando...')})

// uma função pode retornar/conter uma função
function soma(a, b) {
    return function(c) {
        console.log(a + b +c);
    }
}
soma(1,2)(3)