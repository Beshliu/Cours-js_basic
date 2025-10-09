function conversion (from, to, sum) {
    let res 
    if (from === 'RUB' && to === 'USD') {
        res = sum / 70;
    } else if (from === 'RUB' && to === 'Euro') {
        res = sum / 80;
    } else if (from === 'USD' && to === 'Euro') {
        res = sum / 0.1;
    } else if (from === 'USD' && to === 'RUB') {
        res = sum * 70;
    } else if (from === 'Euro' && to === 'RUB') {
        res = sum * 80;
    } else if (from === 'Euro' && to === 'USD') {
        res = sum * 0.1;
    } else {
        res = null
    }

    console.log (`${sum} ${from} = ${res} ${to}`);
}
conversion ('RUB', 'USD', 1000);