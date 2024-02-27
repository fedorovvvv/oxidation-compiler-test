import manual from "./manual/index.js";
import readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

const selectMode = () => {
    rl.question(`Какой режим запустить?\n1 - Manual\nЦифра: `, (answer) => {
        switch (answer) {
            case "1": {
                manual();
                break;
            }
        }
    });
};

const start = () => {
    selectMode();
};

start();
