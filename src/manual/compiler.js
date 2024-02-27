import oxc from "oxc-parser";

const getResult = (code) => oxc.parseSync(code);

export default (code) => {
    return {
        result: getResult(code),
    };
};
