/**
 * Implement the type version of Array.shift
 */
type Shift<T extends Array<any>> = T extends [infer A, ...infer Rest]
  ? Rest
  : T;
