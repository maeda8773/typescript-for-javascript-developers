export {};

// 抽象クラス＆抽象メソッド

// 抽象クラス abstractをつける
abstract class Animal {
  // 抽象メソッド abstractをつける
  // 必ずオーバーライドが必要
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return "roar";
  }
}

class Tiger extends Animal {
  cry() {
    return "grrr";
  }
}
