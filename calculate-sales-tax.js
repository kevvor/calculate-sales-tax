var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]

  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];



function findTotal(array) {
  var sum = 0;
  for (var i of array) {
    sum += i;
  }
  return sum;
}

function getTotalTax(taxRate, totalSales) {
  var tax = taxRate * totalSales;
  return tax;
}

function calculateSalesTax(salesData, taxRates) {
  var tstx = {};

for (let company of salesData) {
  var totalSales = findTotal(company.sales);
   company['totalSales'] = totalSales;
  var taxRate = taxRates[company.province];
    var totalTax = getTotalTax(taxRate, totalSales);
    company['totalTax'] = totalTax;

  if(!tstx[company.name]){
   tstx[company.name] = {"totalSales" : totalSales,
                          "totalTax"  : totalTax};
    }else {
      tstx[company.name].totalSales = tstx[company.name].totalSales + totalSales;
      tstx[company.name].totalTax = tstx[company.name].totalTax + totalTax;


    }


  }
    console.log(tstx);

}

// for (let company of salesData) {
// if(!tstx[company.name]){
//  tstx[company.name] = {totalSales : company.t
//   , company.totalTax}
//  console.log(tstx);
// }
//   tstx[company.name] =  {company.totalSales, company.totalTax};
//   }
// }

calculateSalesTax(companySalesData, salesTaxRates);


















