export {};

// アクセサー

// * owner
//  * 所有者
//  * 初期化時に設定できる。
//  * 途中で変更できない。
//  * 参照できる。

// * secretNumber
//  * 個人番号
//  * 初期化時に設定できる。
//  * 途中で変更できる。
//  * 参照できない。

class MyNumberCard {
  // _をつけて、リネームする慣習的に
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  // getter 参照できるようにする キーワード：get
  get owner() {
    return this._owner;
  }

  // setter 変更できるようにする キーワード：set
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard("ハムさん", 1234567890);
console.log(card.debugPrint());
card.secretNumber = 1111111111;
console.log(card.debugPrint());
// card.owner = "Ham";
console.log(card.owner);
// card.secretNumber;
// card._secretNumber;

// undefinedが返る
console.log(card.secretNumber);
