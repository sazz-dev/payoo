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




// Toggling Feature

document.getElementById('add-top-btn') .addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display = 'block'
    document.getElementById('cash-out-parent').style.display = 'none'
    document.getElementById('paybill-parent').style.display = 'none'
    document.getElementById('transfer-parent').style.display = 'none' 
    document.getElementById('bonus-parent').style.display = 'none' 
})


document.getElementById('cashout-top-btn') .addEventListener('click', function(){
    document.getElementById('cash-out-parent').style.display = 'block'
    document.getElementById('add-money-parent').style.display = 'none'
    document.getElementById('paybill-parent').style.display = 'none'
    document.getElementById('transfer-parent').style.display = 'none' 
        document.getElementById('bonus-parent').style.display = 'none' 

})

document.getElementById('paybill-top-btn') .addEventListener('click', function(){
    document.getElementById('paybill-parent').style.display = 'block'
    document.getElementById('cash-out-parent').style.display = 'none'
    document.getElementById('add-money-parent').style.display = 'none'
    document.getElementById('transfer-parent').style.display = 'none' 
        document.getElementById('bonus-parent').style.display = 'none' 

})


document.getElementById('transfer-top-btn') .addEventListener('click', function(){
    document.getElementById('transfer-parent').style.display = 'block' 
    document.getElementById('paybill-parent').style.display = 'none'
    document.getElementById('cash-out-parent').style.display = 'none'
    document.getElementById('add-money-parent').style.display = 'none'
        document.getElementById('bonus-parent').style.display = 'none' 

})

document.getElementById('bonus-top-btn') .addEventListener('click', function(){
    document.getElementById('bonus-parent').style.display = 'block' 
    document.getElementById('transfer-parent').style.display = 'none' 
    document.getElementById('paybill-parent').style.display = 'none'
    document.getElementById('cash-out-parent').style.display = 'none'
    document.getElementById('add-money-parent').style.display = 'none'

})