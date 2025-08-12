function conversion(rate) {

   const from_RUB_In_USD = 1 / 80;      
   const from_RUB_In_Euro = 1 / 90;
   const from_RUB_In_JPY = 0;
   const from_USD_In_RUB = 1 * 80;
   const from_USD_In_Euro = 1 / 1.16;
   const from_USD_In_JPY = 0;
   const from_Euro_In_RUB = 1 / 80;
   const from_Euro_In_USD = 1 * 1.16;
   const from_Euro_In_JPY = 0;
   const from_JPY_In_RUB = 0;
   const from_JPY_In_USD = 0;
   const from_JPY_In_Euro = 0;

   
const exchenge = rate * from_RUB_In_USD;

    console.log(`From ${rate}`);
    return exchenge || null;
}

console.log(`To ${conversion(1000)}`);