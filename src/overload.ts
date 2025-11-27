export {};

// オーバーロード

// シグネチャー　型定義＆型制約
function double(value: number): number;
function double(value: string): string;

// シグネチャーで型定義しているから（numberかstringか担保できてるから）、anyでもいい
function double(value: any): any {
  if (typeof value === "number") {
    return value * 2;
  } else {
    return value + value;
  }
}

console.log(double(100));
console.log(double("Go "));
