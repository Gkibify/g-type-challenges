/**
 * Recursively flatten array up to depth times.
 * 实现思路：
 * 1. 先考虑将数组扁平
 * 2. 然后通过数组长度来来判断层次
 */
type FlattenDepth<
  T extends any[],
  S extends number = 1,
  U extends any[] = []
> = U["length"] extends S
  ? T
  : T extends [infer F, ...infer R]
  ? F extends any[]
    ? [...FlattenDepth<F, S, [...U, 1]>, ...FlattenDepth<R, S, U>]
    : [F, ...FlattenDepth<R, S, U>]
  : T;
