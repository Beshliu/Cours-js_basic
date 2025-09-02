const encrypt = crypto('осьминог');

function crypto(password) {
const breakdown = password.split('');
const mix = breakdown.splice(2, 3);
const add = mix.concat(breakdown);
const unit = add.join('');
return unit;
}

function check(password) {
const trans = crypto(password);
console.log(trans === encrypt);
}

check('осьминог');