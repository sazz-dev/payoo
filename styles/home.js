const validPin = 1234


document.getElementById("add-money-btn") .addEventListener ("click", function(e){
    e.preventDefault()


    const bank = document.getElementById('bank').value
    const accountNumber = document.getElementById('account-number').value
    const amount = parseInt(document.getElementById('add-amount').value)
    const pin = parseInt(document.getElementById('add-pin').value)

    const availableBalence = parseInt (document.getElementById('available-balance').innerText)


    if(accountNumber.length < 11){
        alert('Please Enter Valid Account Number')
        return;
    }


    if(pin !== validPin){
        alert('Please Enter valid pin')
        return;
    }

    

    const totalNewBalence = amount + availableBalence
    document.getElementById('available-balance').innerText = totalNewBalence

})