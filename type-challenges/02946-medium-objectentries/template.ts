/**
 * 数组转联合类型用 [number] 作为下标
 * ['1', '2']['number'] // '1' | '2'
 *
 * 对象则是用 [keyof T] 作为下标
 * type ObjectToUnion<T> = T[keyof T]
 *
 * */

type ObjectEntries<T> = {
    [K in keyof Required<T>]: [
      K,
      [T[K]] extends [undefined] ? undefined : Required<T>[K]
    ];
  }[keyof T];

