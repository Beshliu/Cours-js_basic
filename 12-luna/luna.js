const nuberCard = '4561-2612-1234-5464';

function testCard (card) {
    card = card.replaceAll('-', '');
    let newNumbersCard = '';
    for(let number of card) {
        if(number % 2 === 0) {
            let num = number*2;
            if(num > 9) {
                num = num - 9;
            }
            newNumbersCard += num;
        }else{
            newNumbersCard += number
        }
    }
    const arr = newNumbersCard.split('');
    const isRialCard = arr.reduce((acc, value)=> {
        return acc += Number(value);
    }, 0)
    if(isRialCard % 10 != 0) {
        return false;
    }else{
        return true;
    }
    return isRialCard; 
}

console.log(testCard(nuberCard));