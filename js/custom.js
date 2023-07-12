document.addEventListener("DOMContentLoaded", function () {
  //- 禁止按F12调试
  document.onkeydown = document.onkeyup = document.onkeypress = function (event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e && e.keyCode == 123) {
      e.returnValue = false;
      return (false);
    }
  }
  setInterval(function() {
    check();
  }, 2000);
  var check = function() {
    function doCheck(a) {
      if (('' + a / a)['length'] !== 1 || a % 20 === 0) {
        (function() {}['constructor']('debugger')());
      } else {
        (function() {}['constructor']('debugger')());
      }
      doCheck(++a);
    }
    try {
      doCheck(0);
    } catch (err) {}
  };
});