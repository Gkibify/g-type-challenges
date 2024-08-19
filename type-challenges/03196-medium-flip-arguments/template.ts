/**
 * Implement the type version of lodash's _.flip。
 * 实现的思路：
 * 就是将参数进行一个反转即可
 */
type ReverseFilp<T extends any[]> = T extends [...infer A, infer R]
  ? [R, ...ReverseFilp<A>]
  : T;

  type FlipArguments<T> = 
  T extends (...args: [...infer A]) => infer R 
    ? (...args: ReverseFilp<A>) => R
    : never

