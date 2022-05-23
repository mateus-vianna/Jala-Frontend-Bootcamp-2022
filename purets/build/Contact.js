let x = { id: 12, name: "string", birthDate: new Date("2000-01-01") };
function clone(source) {
    return Object.assign({}, source);
}
function clone2(source) {
    return source;
}
const b = clone(x);
export {};
