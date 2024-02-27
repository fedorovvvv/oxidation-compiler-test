import compiler from "./compiler.js";

const firstTest = () => {
    console.log("firstTest START");
    const compilerResult = compiler(`
        const sum = (a, b) => a + b
        console.log(sum(...[1,2]))
    `);
    console.log(`compilerResult: `, compilerResult);
    console.log("firstTest END");
};

export default () => {
    firstTest();
};
