export {};

type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

// Partial プロパティを全てオプショナルにしてくれる
type PartialType = Partial<Profile>;

// Required プロパティを全て必須にする
type RequiredType = Required<Profile>;
