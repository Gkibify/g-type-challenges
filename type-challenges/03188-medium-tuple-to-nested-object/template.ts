/**
 * 注意：TS中的key必须是有效的键，即必须是number symbol 或者是 String 类型
 */
type TupleToNestedObject<T extends any[], U> = T extends [infer R,...infer Rest] ? {
    [K in R as R extends PropertyKey ? R : never]: TupleToNestedObject<Rest, U>
} : U


type a = TupleToNestedObject<['a'], string>