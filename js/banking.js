
function getInputValue (){
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // clear the deposit input file
    depositInput.value = '';
    return newDepositAmount;
}









//handle diposit input button
document.getElementById('deposit-button').addEventListener('click', function() {
    const newDepositAmount = getInputValue();

    // deposit update total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;   
    depositTotal.innerText = newDepositTotal;

    //update account balence
    const balenceTotal = document.getElementById('balence-total');
    const balenceTotalText = balenceTotal.innerText;
    const previousBalenceTotal = parseFloat(balenceTotalText);
    const newBalenceTotal = previousBalenceTotal + newDepositAmount;
    balenceTotal.innerText = newBalenceTotal;  

    
})

//handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function() {
    
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newwithdrawAmount = parseFloat(withdrawAmountText);
    // console.log(withdrawAmount);
// set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newwithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    //update balence
    const balenceTotal = document.getElementById('balence-total');
    const previousBalenceText = balenceTotal.innerText;
    const previousBalenceTotal = parseFloat(previousBalenceText);
    const newBalenceTotal = previousBalenceTotal - newwithdrawAmount;

    balenceTotal.innerText = newBalenceTotal;
    // clear withdraw input
    withdrawInput.value = '';
})

    

