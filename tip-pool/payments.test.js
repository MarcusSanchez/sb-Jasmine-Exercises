describe("Payments test (with setup and tear-down)", () => {
  beforeEach(() => {
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
  });

  it('should add a new payment to allPayments on submitPaymentInfo()', () => {
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments['payment1'].billAmt).toEqual('100');
    expect(allPayments['payment1'].tipAmt).toEqual('20');
    expect(allPayments['payment1'].tipPercent).toEqual(20);
  });

  it('should not add a new payment on submitPaymentInfo() with empty input', () => {
    billAmtInput.value = '';
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(0);
  });

  it('should payment update #paymentTable on appendPaymentTable()', () => {
    let curPayment = createCurPayment();
    allPayments['payment1'] = curPayment;

    appendPaymentTable(curPayment);

    let curTdList = document.querySelectorAll('#paymentTable tbody tr td');

    expect(curTdList.length).toEqual(3);
    expect(curTdList[0].innerText).toEqual('$100');
    expect(curTdList[1].innerText).toEqual('$20');
    expect(curTdList[2].innerText).toEqual('20%');
  });

  it('should create a new payment on createCurPayment()', () => {
    let expectedPayment = {
      billAmt: '100',
      tipAmt: '20',
      tipPercent: 20,
    }

    expect(createCurPayment()).toEqual(expectedPayment);
  });

  it('should not create payment with empty input on createCurPayment()', () => {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    let curPayment = createCurPayment();

    expect(curPayment).toEqual(undefined);
  });

  afterEach(() => {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    paymentId = 0;
    allPayments = {};
  });
});