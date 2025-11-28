export {};

class Person {
  // TypeScriptでは、
  // コンストラクターの引数にアクセス修飾子をつけると初期化処理を行う
  constructor(public name: string, protected age: number) {}
}

const me = new Person("ハムさん", 43);
console.log(me);
