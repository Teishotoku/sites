class Box{

  _age = 0
  
  constructor(name, age){
    console.log('Initial class');
    
    this.name = name
    this.age = age
  }

  hi(){
    console.log("Hi " + this.name);
  }

  set age(value){
    this._age = value
    console.log(2024 - this._age);
  }

  get age(){
    return this._age
  }
  
}

let myBox = new Box('Jeane', 23)
let myBox2 = new Box('Mike', 34)
let myBox3 = new Box('Nike', 17)

myBox.age = 21

myBox3.hi()

console.log(myBox instanceof Box);
