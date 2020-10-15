module.exports = function toReadable (number) {
    let strNumberObj = {

        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty'
    }
    
    let strNumber = String(number);
    let result = '';

    if(number === 0){
        return 'zero';
    }
    
    switch (strNumber.length) {
        case 3:
            result += `${strNumberObj[Number(strNumber[0])]} hundred`;
            if (0 <= (number - strNumber[0] * 100) && (number - strNumber[0] * 100) <= 20) {
                result = `${result} ${strNumberObj[number - (Number(strNumber[0])*100)]}`;
            } else if (20 < (number - strNumber[0] * 100) && (number - strNumber[0] * 100) <= 39) {
                result = `${result} ${strNumberObj[`${strNumber[1]}0`]} ${strNumberObj[strNumber[2]]}`
            } else result = `${result} ${strNumberObj[strNumber[1]]}ty ${strNumberObj[strNumber[2]]}`
            break;
        case 2:
            if (number <= 20) {
                result = strNumberObj[number];
            } else if (number > 20 && number < 40){
                result = `${result} ${strNumberObj[`${strNumber[0]}0`]} ${strNumberObj[strNumber[1]]}`
            } else result = `${result} ${strNumberObj[strNumber[0]]}ty ${strNumberObj[strNumber[1]]}`
            break;
        case 1:
            result +=strNumberObj[strNumber[0]];
            break;
    }

    return result.replace('eightty', 'eighty').replace('fourty', 'forty').replace('fivety', 'fifty').trim();
}
