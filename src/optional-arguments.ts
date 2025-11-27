export {};

// オプショナル引数 あってもなくてもいい引数

// オプショナル引数には(printable?: boolean)のように、引数名の後ろに?をつける
let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);

  if (printable) {
    console.log({ bmi });
  }
  return bmi;
};

bmi(1.78, 86);

// bmi(身長, 体重, console.logで出力するかどうか?)
// bmi(身長, 体重, true)
// bmi(身長, 体重, false)
// bmi(身長, 体重)
