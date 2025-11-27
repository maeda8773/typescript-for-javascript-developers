export {};

// functionキーワードを使用する関数の型アノテーションの関係
// 引数と戻り値を意識すればいい

//①function bim(h: number, w: number){}　引数にアノテーションをする
//②function bim():number{} returnで戻る値にアノテーションする
function bmi(height: number, weight: number): number {
  return weight / (height * height);
}

console.log(bmi(1.78, 86));
