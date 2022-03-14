// level {3}

// Q1
const makeUp = (inpObj) => {
    Object.keys(inpObj).forEach((key) => {
        if (typeof inpObj[key] !== 'object') {
            inpObj[key] = inpObj[key].toUpperCase();
        }
        if (typeof inpObj[key] === 'object' && inpObj[key] !== null) {
            makeUp(inpObj[key]);
        }
    });
    return inpObj;
};

// Q2
const makeObj = (inpStr) => {
    const newStr = `{${inpStr}}`;
    return JSON.parse(newStr);
};

// Q3
const balanceCheck = (inpStr) => {
    let temp = inpStr;
    let st = 0;
    let ed = temp.length - 1;
    if (temp[st] === '(' && temp[ed] === ')') {
        let diff = st + 1 - ed;
        if (diff % 2 === 0) {
            st += 1;
            temp.pop();
        } else {
            return 'invalid';
        }
    }
    for (let p = 0; p < temp.length; p++) {
        if (temp[p] !== ')' || temp[p] !== '}' || temp[p] !== ']') {
            return 'valid';
        }
    }
};
