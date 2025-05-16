import readline from "readline";

class InputReader {
  constructor(onInput, onTimeout) {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: "> ",
    });

    this.onInput = onInput;
    this.onTimeout = onTimeout;
    this.timeout = null;

    this.rl.on("line", (line) => {
      clearTimeout(this.timeout);
      this.onInput(line);
    });
  }

  prompt() {
    this.rl.prompt();
    this.timeout = setTimeout(() => {
      console.log("\n⏰ Temps écoulé. Rechargement du menu principal...\n");
      this.onTimeout();
    }, 10000); // 10 secondes
  }

  close() {
    clearTimeout(this.timeout);
    this.rl.close();
  }
}

let instance = null;
function createInputReader(onInput, onTimeout) {
  if (!instance) {
    instance = new InputReader(onInput, onTimeout);
  }
  return instance;
}

export default createInputReader;
