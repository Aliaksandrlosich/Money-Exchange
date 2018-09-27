// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  let obj = {};
  if (currency <= 0) return obj;
    if (currency > 10000) {
        obj.error = "You are rich, my friend! We don't have so much coins for exchange";
        return obj;
    }
  const money = [
      {
        name: "H",    coin: 50
      },
      {
        name: "Q",    coin: 25
      },
      {
        name: "D",    coin: 10

      },
      {
        name: "N",    coin: 5
      },
      {
        name: "P",    coin: 1
      }
    ];
    for (var i = 0; i < money.length; i++) {
      money[i].n = Math.trunc( currency / money[i].coin );
      currency = currency % money[i].coin;
      if( money[i].n !== 0){
        obj[money[i].name] = money[i].n;
      }
    }
    return obj;
  }
