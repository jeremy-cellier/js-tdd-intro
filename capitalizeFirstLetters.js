
const capitalizeFirst = (arg) => {
    let stringout = '';
    for (let i=0; i < arg.length; i++) {
        if (arg[i] === ' ') {
            stringout = stringout + arg[i] + arg[i + 1].toUpperCase();
            i++;
        }else {
            stringout = stringout + arg[i];
        }
    };
    return stringout;
}

module.exports = capitalizeFirst;