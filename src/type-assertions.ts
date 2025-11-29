export {};

// 型アサーション
// エンジニアがコンパイラーに型を教えてあげる

let name: any = "Ham";

// ３つ方法がある
// let length = name.length as number;
// let length = (name as string).length;
let length = (<string>name).length; // 推奨されていないreactの記法に似ているため

length = "foo";
