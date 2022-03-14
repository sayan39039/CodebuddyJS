// level {3}

const result = (inputObj) => {
    let resArr = [];
    inputObj.liked.map((elem) => {
        resArr.push(elem);
    });
    inputObj.disliked.map((elem) => {
        resArr.push(elem);
    });
    inputObj.loved.map((elem) => {
        resArr.push(elem);
    });
    return resArr;
};
