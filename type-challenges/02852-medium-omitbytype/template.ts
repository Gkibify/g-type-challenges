
// 这里的as不是类型断言而是一种键名的重新映射
type OmitByType<T, U> =  {
    [P in keyof T as T[P] extends U ? never : P]: T[P] 
}

