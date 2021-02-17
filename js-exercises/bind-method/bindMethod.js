// You can change the `args`
function bind(Fn, obj) {
  return function callBack(...args) {
    return Fn.apply(obj, args);
  };
}

module.exports = { bind };
