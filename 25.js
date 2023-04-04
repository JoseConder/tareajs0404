///25.- Introducir un número menor de 5000 y pasarlo a numero romano.

function roman(n){
    if(n<1 || n > 5000){
        console.log("El numero esta fuera del rango");
    }
    const rnums = [
        { number: 1000, symbol: 'M' },
        { number: 900, symbol: 'CM' },
        { number: 500, symbol: 'D' },
        { number: 400, symbol: 'CD' },
        { number: 100, symbol: 'C' },
        { number: 90, symbol: 'XC' },
        { number: 50, symbol: 'L' },
        { number: 40, symbol: 'XL' },
        { number: 10, symbol: 'X' },
        { number: 9, symbol: 'IX' },
        { number: 5, symbol: 'V' },
        { number: 4, symbol: 'IV' },
        { number: 1, symbol: 'I' }
      ];
      let res= '';
      for (let i = 0; i < rnums.length; i++) {
        while (n >= rnums[i].number) {
          res += rnums[i].symbol;
          n -= rnums[i].number;
        }
      }
      return res;
}
console.log(roman(3999));
