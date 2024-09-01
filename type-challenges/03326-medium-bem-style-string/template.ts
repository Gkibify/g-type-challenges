type IsNever<T> = [T] extends [never] ? true : false
type IsUnion<U> = IsNever<U> extends true ? "" : U
type BEM<B extends string, E extends string[], M extends string[]> = `${B}${IsUnion<`__${E[number]}`>}${IsUnion<`--${M[number]}`>}`