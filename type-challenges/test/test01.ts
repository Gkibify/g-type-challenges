// 参数类型
type t1 = ((a: number) => any) extends (a: 0) => any ? true : false;
type t2 = ((a: 0) => any) extends (a: number) => any ? true : false;

// 无参和有参
type t3 = (() => any) extends (a: string) => any ? true : false;

// 参数的个数
type t4 = ((a: string) => any) extends (a: string, b: number) => any
  ? true
  : false;

// 返回值
type t5 = (() => 0) extends () => number ? true : false;
type t6 = (() => number) extends () => 0 ? true : false;

// 有无返回值
type t7 = (() => number) extends () => void ? true : false;

// 注意：泛型的联合类型存在分发机制
