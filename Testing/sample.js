export { myLength, myPop };

const myLength = (array) => {
    let counter = 0;
    for (let value of array) {
        counter++;
    }

    return counter;
};
const myPop = (array) => {
    const length = myLength(array);
    let secondaryarray = [];
    for (let x = 0; x < length - 1; x++) {
        secondaryarray[x] = array[x];
    }
    array = secondaryarray;
    return array;
};
const myPush = (array, value) => {
    const length = myLength(array);
    array[length] = value;

    return array;
};

const myUnshift = (array, value) => {
    const length = myLength(array);
    let secondaryArray = [];
    for (let x = 0; x < length - 1; x++) {
        secondaryArray[x] = array[x + 1];
    }
    array = secondaryArray;
    return array;
};
