export {};

// 無名関数による関数定義

// : (height: number, weight: number) => number　関数の型定義
let bmi: (height: number, weight: number) => number = function (
  height: number,
  weight: number
): number {
  return weight / (height * height);
};

console.log(bmi(1.78, 86));
