export {};

// objectは制約が甘い
let profile1: object = { nema: "Ham" };
profile1 = { brithYear: 1976 };

// {}プロバティに型を宣言できる
let profile2: {
  name: string;
} = { name: "Ham" };
profile2 = { name: "Nimo" };
