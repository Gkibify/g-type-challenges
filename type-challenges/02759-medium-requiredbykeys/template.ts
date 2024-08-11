type MergeRequire<T> = {
  [K in keyof T]: T[K];
};

type RequiredByKeys<T, K extends PropertyKey = keyof T> = MergeRequire<
  T & Required<Pick<T, K extends keyof T ? K : never>>
>

