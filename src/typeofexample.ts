type Predicate = (x : unknown) => Boolean;

function f1() {
    return {x: 20, y: "hello"};
}
type P = ReturnType<Predicate>

type P2 = ReturnType<typeof f1>

// type PError = ReturnType<f1>