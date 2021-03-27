type A = {
  a: number;
  b: number;
};
type B = {
  b: number;
  c: number;
};
type C = A | B;

var c: C = { a: 1, b: 2, c: 3 };
c as A;
