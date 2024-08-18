/**
 * 实现数组的反转
 * 解决：通过递归实现即可
 */
type Reverse<T extends any[]> = T extends [...infer A, infer R]
  ? [R, ...Reverse<A>]
  : T;

