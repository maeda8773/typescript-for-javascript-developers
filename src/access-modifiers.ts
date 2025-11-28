export {};

// アクセス修飾子

class Person {
  // publicは記述しても、しなくてもいい
  public name: string;
  // privateは外からのアクセスを制御する
  // private age: number;
  protected age: number;
  // protectedは外からアクセスできないが、子クラスからはアクセスできる
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}

let taro = new Person("Taro", 30, "Japan");
console.log(taro.profile());
console.log(taro.name);
// console.log(taro.age);
// let hanako = new Person();
