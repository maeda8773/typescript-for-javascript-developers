export {};

// 継承

class Animal {
  constructor(public name: string) {}
  run(): string {
    return "I can run";
  }
}

// 継承には、extendsを使用する
class Lion extends Animal {
  // 子クラスのメンバ変数を外に出して、publicを外す
  // 親クラスから継承しているメンバ変数はsuperに任せる
  public speed: number;
  constructor(name: string, speed: number) {
    // superは親クラスのコンストラクタそのもの
    super(name);
    this.speed = speed;
  }
  run(): string {
    return `${super.run()} ${this.speed}km.`;
  }
}

// let animal = new Animal();
// console.log(animal.run());

// let lion = new Lion();
// console.log(lion.run());

console.log(new Animal("Mickey").run());
console.log(new Lion("Simba", 80).run());
