export {};

// 関数に引数が渡されない(又はundefinedの場合)、設定した値が使用される

const nextYearSalary = (currentSalary: number, rate: number = 1.1): number => {
  return currentSalary * rate;
};

console.log(nextYearSalary(1000));
