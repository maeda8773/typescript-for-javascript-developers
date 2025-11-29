export {};

function add(a: number, b: number) {
  return a + b;
}

console.log(add(1, 2));

type ReturnTypeFromAdd = ReturnType<typeof add>;

type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R // 戻り値の方がRとして扱われる
  ? R // すなわち、戻り値の型が返ってる
  : any;
