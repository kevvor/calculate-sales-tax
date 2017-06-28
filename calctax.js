  function calculateTax(sales, taxRate) {
    var preTax = 0;
    var totalTax = 0;
    for (var i = 0; i < sales.length; i++) {
      preTax += sales[i];
    }
    totalTax = preTax * taxRate;
    return totalTax;
  }

  console.log(calculateTax([ 100, 200, 400 ], 0.12))