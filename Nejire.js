(function() {
  function registerExtension() {
    if (!(window.Scratch && Scratch.extensions && document.body)) {
      setTimeout(registerExtension, 50);
      return;
    }

    class CanvasDistort {
      constructor(runtime) {
        this.runtime = runtime;
        ...
      }
      getInfo() { ... }
      setAmount(args) { ... }
      startAnimation() { ... }
    }

    Scratch.extensions.register(new CanvasDistort());
  }

  registerExtension();
})();
