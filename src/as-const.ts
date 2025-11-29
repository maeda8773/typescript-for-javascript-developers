export {};

// constアサーション

let name = "Atsushi";

name = "Ham";

let nickname = "Ham" as const;
nickname = "Ham";

let profile = {
  name: "Atsushi",
  height: 178,
} as const; // name、heightにreadonlyが付与される

// profile.name = "Ham";
// profile.height = 180;
