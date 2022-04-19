// prints the global "this" which is the window object in the browser

console.log(this);

// also prints the global "this" as above

function helloThis() {
  console.log('Inside this function, this is ' + this);
}

// this refers to the child object. will console log 20

var child = {
  age: 10,
  ageTenYears: function () {
    console.log(this.age + 10);
  },
};

child.ageTenYears()

// this refers to the investment. will console log 5750

var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15);
    },
  },
};

investor.investment.investmentGrowth()