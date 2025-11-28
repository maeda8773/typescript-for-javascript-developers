export {};

class Mahotsukai {}
class Souryo {}

// typescriptは単一継承
// 複数のインターフェースを継承のようなことができる　実装＝継承
class Taro extends Mahotsukai {}

interface Kenja {
  ionazun(): void; // シグネチャー
}

interface Senshi {
  kougeki(): void;
}

// JiroクラスはKenjaとSenshiインターフェースを実装(implements)している
class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log("ionazun");
  }

  kougeki(): void {
    console.log("kougeki");
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
