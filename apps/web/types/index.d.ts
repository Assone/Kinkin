type FunctionParamsType<T> = T extends (...args: infer P) => any ? P : never;
type FunctionReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
