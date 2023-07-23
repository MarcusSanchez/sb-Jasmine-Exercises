
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000,
    years: 12,
    rate: 4.4
  }
  expect(calculateMonthlyPayment(values)).toEqual('89.51');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 60044.5,
    years: 6,
    rate: 5.5
  }
  expect(calculateMonthlyPayment(values)).toEqual('981.00');
});


it("should handle terribly high interest rates", function() {
  const values = {
    amount: 10000,
    years: 8,
    rate: 100
  }
  expect(calculateMonthlyPayment(values)).toEqual('833.72');
});

it("should handle terribly low interest rates", function() {
  const values = {
    amount: 500,
    years: 8,
    rate: 0.1
  }
  expect(calculateMonthlyPayment(values)).toEqual('5.23');
});