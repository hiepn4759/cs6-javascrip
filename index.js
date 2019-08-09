//arguments
/*
function sum() {
    // var result = 0;
    // for(var i = 0 ; i < arguments.length; i ++){
    //     result += arguments[i];
    // }
    // return result;
    const number = Array.from(arguments);
    return number.reduce(function(sum, num){
        return sum + num;
    }, 0);
}
console.log(sum(1, 2, 3, 88));
*/



//default parameters
/*
function getTing(name='friend', language='ja') {
    if(language === 'en') {
        return `Hi, ${name}`;
    }
    if(language === 'ja') {
        return `Konichiwa, ${name}`;
    }
    return `Hello`;
}
console.log(getTing());
*/

//call
/*
function greeting() {
    console.log(`hi! ${this.name}. im am ${this.age}`);
}
const cat = {
    name: 'hiep',
    age: 100
}
greeting.call(cat);
*/

//apply
/*
function greeting() {
    console.log(`hi! ${this.name}. im am ${this.age}`);
}
const cat = {
    name: 'hiep',
    age: 100
}
greeting.apply(cat);

function sum() {
    const number = Array.from(arguments);
    return number.reduce((sum, num) => sum + num, 0);
}
function average() {
    //sum
    const x = sum.apply(null, arguments);
    //sum / arguments.length
    return x / arguments.length;
}
console.log(average(1, 2, 3, 6));
*/

/*
//Enhanced object literals

//constructor function
function Mouse(name) {
    this.name = name;
}
Mouse.prototype.run = function() {
    console.log(`${this.name} is runing`);
}
const mickey = new Mouse('Mickey');
mickey.run();

//object literals
const jerry = {
    name: 'Jerry',
    run: function() {
        console.log(`${this.name} is runing`);
    }
};
jerry.run();

//Enhanced object literals
const name = 'Tom';
const cat = {
    name: name,
    run() {
        console.log(`${this.name} is runing`);
    }
};
cat.run();
*/
/*
//class
// function Mouse(name) {
//     this.name = name;
// }
// Mouse.prototype.run = function() {
//     console.log(`${this.name} is running`);
// }
// const mickey = new Mouse('Micker');
// mickey.run();

class Mouse {
    constructor(name){
        this.name = name;
    }
    run() {
        console.log(`${this.name} is running`);
    }
}
const mickey = new Mouse('Hiep');
mickey.run();
*/

/*
// class inheritance
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     eat() {
//         console.log(`Eating...`);
//     }
// }
// const dv = new Animal;
// dv.eat();

// class Bird extends Animal {
//     fly() {
//         console.log(`fly...`);
//     }
// }
// const bird  = new Bird;
// bird.fly();

function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function() {
    console.log(`${this.name} is eatting....`);
}

function Bird(name) {
    Animal.apply(this, arguments);
}

Bird.prototype = new Animal('hiep');
Bird.prototype.eat();
*/

/*
//method overriding
class a {
    b() {
        console.log('hiep');
    }
}
class c  extends a {
    b(cb){
        console.log('huyen');
        cb();
    }
}
const e = new c;
e.b(function(){
    console.log('hiep');
});
*/

/*
//supper

class Hero {
    constructor(name, hp , damage) {
        this.name = name;
        this.hp = hp;
        this.damage = damage;
    }
    applyDamage(damage) {
        this.hp -= damage;
    }
    attack(enemy) {
        enemy.applyDamage(this.damage);
    }
}


class RangedHero extends Hero {
    constructor(name, hp , damage, range ) {
        super(name, hp , damage);
        this.range = range;
    }
    attack(enemy) {
        super.attack(enemy);
        this.hp += this.damage;
    }
}
const heroA = new RangedHero('A', 100 , 10, 10);
const heroB = new Hero('B', 200, 5);
console.log({heroA, heroB});
heroA.attack(heroB);
console.log({heroA, heroB});
*/

/*
//static

class Foo {
    static a(){
        console.log('c');
    }
    b() {
        console.log('b');
    }
}
const c = new Foo();
c.b();
Foo.a();
*/

/*
//rest
function sum(...nums) {
    return nums.reduce((a, b) => {
        return a + b;
    }, 0);
}
console.log(sum(1, 2, 3, 4, 5));

function concat(separator, ...strings) {
    return strings.join(separator);
}
console.log(concat('.', 'a', 'b', 'c'));
*/

/*
//spread
const a = [1,2,3];
const b = [0, ...a, 4];
console.log(b);


const obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: {e: 10}
}
let obj2 = {
    ...obj1,
    z: 1000
};
// for(let key in obj1) {
//     obj2[key] = obj1[key];
// }
// obj2.d.e = 11;
//deep clone
console.log({ obj1, obj2 });
*/


/*
//Value types vs Reference types
let a1 = 1;
let a2 = 1;
console.log(a1 === a2);

let obj1 = { a: 1 };
let obj2 = { a: 1 };
console.log(obj1 === obj2);

let a3 = a2;
a3=2;
console.log(a2);

let obj3 = obj2;
obj3.a = 2;
console.log(obj2);
*/

/*
//Closure
function sum(a, b) {
    const c = a + b;

    return function() {
        console.log(c);
    };
}
sum(1,2)();

function debug(name) {
    return function(str) {
        console.log(`${name} ${str}`);
    }
}
const log = debug('Mouse');
log('Error');
*/


/*
//Higer order functions
function waitAndRun(ms , func) {
    setTimeout(func, ms);
}
function run() {
    console.log('run');
}
waitAndRun(2000, run);
*/


//Destructuring
const arr = [10, 20, 30, 40, 50];
const [a, ...b] = arr;
console.log(a, b);

const obj = {
    a: 1,
    b: 2,
    c: 3
}
const {a: x, b: y, c: z} = obj
console.log(x, y, z);