// @strict: true
// @declaration: true

// Repro from #38098

type M<T> = { value: T };
interface M2 extends M<M3> {};  // Error
type M3 = M2[keyof M2];  // Error

function f(m: M3) {
  return m.value;
}

// Repro from #32581

type X<T> = { [K in keyof T]: string } & { b: string };
interface Y extends X<Y> {
  a: "";
}
