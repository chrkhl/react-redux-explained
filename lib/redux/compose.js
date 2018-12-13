// e.g.:
// funcs = [ f1, f2, f3, f4 ]
// -> f4(f3(f2(f1())))

const compose = (...funcs) => funcs.reduceRight((composed, f) => f(composed));

export default compose;