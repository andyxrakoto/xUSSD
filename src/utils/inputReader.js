import readline from 'readline';

class InputReader {
  constructor(onInput) {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: '> '
    });

    this.onInput = onInput;

    this.rl.on('line', (line) => {
      this.onInput(line);
    });
  }

  prompt() {
    this.rl.prompt();
  }

  close() {
    this.rl.close();
  }
}

export default InputReader;
