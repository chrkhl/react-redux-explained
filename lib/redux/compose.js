// e.g.:
// funcs = [ f1, f2, f3, f4 ]
// -> f4(f3(f2(f1())))

export default compose = (...funcs)
  => funcs.reduceRight((composed, f) => f(composed));