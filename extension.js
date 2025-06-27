class DistortEffect {
  constructor(runtime) {
    this.runtime = runtime;
    this.distortAmount = 0;
  }

  getInfo() {
    return {
      id: 'distorteffect',
      name: '歪みエフェクト',
      blocks: [
        {
          opcode: 'setDistortion',
          blockType: Scratch.BlockType.COMMAND,
          text: '歪みを [AMOUNT] に設定',
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

  setDistortion(args) {
    this.distortAmount = args.AMOUNT;
    // WebGL フィルターの適用（擬似的な例）
    this.runtime.renderer.setStageFilter({
      type: 'wavy',
      amount: this.distortAmount
    });
  }
}

Scratch.extensions.register(new DistortEffect());
