type mergeRequire<T> = {
  [K in keyof T]: T[K];
};

type RequiredByKeys<T, K extends keyof T> = {
  [S in keyof T as S extends K ? S : never]: T[S];
} & {
  [P in Exclude<keyof T, K>]?: T[P];
};

interface User {
  name?: string;
  age?: number;
  address?: string;
}

type a = RequiredByKeys<User, "name">;
