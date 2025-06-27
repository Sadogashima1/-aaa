class CanvasDistort {
  constructor(runtime) {
    this.runtime = runtime;
    this.amount = 0.1;

    this.canvas = document.createElement("canvas");
    this.canvas.width = 480;
    this.canvas.height = 360;
    this.canvas.style.position = "absolute";
    this.canvas.style.left = "0px";
    this.canvas.style.top = "0px";
    this.canvas.style.zIndex = "1000";
    this.canvas.style.pointerEvents = "none";
    this.canvas.style.imageRendering = "pixelated";

    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");

    this.startAnimation();
  }

  getInfo() {
    return {
      id: "canvasdistort",
      name: "Canvas歪み",
      blocks: [
        {
          opcode: "setAmount",
          blockType: Scratch.BlockType.COMMAND,
          text: "歪みを [AMOUNT] に設定",
          arguments: {
            AMOUNT: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0.1
            }
          }
        }
      ]
    };
  }

  setAmount(args) {
    this.amount = parseFloat(args.AMOUNT);
  }

  startAnimation() {
    let t = 0;
    const draw = () => {
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // 透明な波
      for (let y = 0; y < this.canvas.height; y += 2) {
        const dx = Math.sin((y + t) * 0.05) * this.amount * 50;
        ctx.fillStyle = "rgba(255,255,255,0.02)";
        ctx.fillRect(dx, y, this.canvas.width, 2);
      }

      t += 1;
      requestAnimationFrame(draw);
    };
    draw();
  }
}

Scratch.extensions.register(new CanvasDistort());
