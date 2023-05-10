// function

stringLength = (string) => {

    if (string.length < 1) {
        throw new Error("Input string must be at least 1 character long.");
      }
      if (string.length > 10) {
        throw new Error("Input string must not be longer than 10 characters.");
      }
      
    let count = 0;
    [...string].forEach(char => {
        char ++;
        count += 1;
    });
    return count;
};

module.exports = stringLength;



