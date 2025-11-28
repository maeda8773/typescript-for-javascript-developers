export {};

// クラスのプロパティを読み取り専用にする
// readonlyをつけると書き換えができなくなる

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard("はむさん");
console.log(myVisaCard.owner);
// myVisaCard.owner = "ベーコン";
