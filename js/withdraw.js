document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextElemenValuetById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElemenValuetById('withdraw-total', newWithdrawTotal);
    const previousBalanceTotal = getTextElemenValuetById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElemenValuetById('balance-total', newBalanceTotal);
})