type A = string | undefined;
type B = Exclude<A, undefined>;

type C = NonNullable<A>

type T = [number, boolean, string]
type T1 = T[1]
type T2 = T['length']
// 将元组类型转化为联合类型
type T3 = T[number]

type P = {
    x: 1,
    y: 8
}

type X = P['x']
type Key = P[keyof P]

type T4 = Pick<{a: 1; b: 2, c: 3}, 'a'>
type T5 = Omit<{a: 1; b: 2, c: 3}, 'a' | 'c'>


