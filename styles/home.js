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

    const data = {
    name: "add-amount",
    date:new Date().toLocaleTimeString()
    }
    transactionsData.push(data)

})

const transactionsData = []

const transactionsSection = document.getElementById('transactions-parent')


// Cahsout Function
document.getElementById('cash-out-btn') .addEventListener ('click', function (e){
    e.preventDefault()

    const amount = parseInt(document.getElementById('amount-cashout').value)
    const availableBalence = parseInt (document.getElementById('available-balance').innerText) 

    const totalNewBalence = availableBalence - amount
    document.getElementById('available-balance').innerText = totalNewBalence

})


document.getElementById('logout').addEventListener('click', function(){
    window.location.href="./index.html"
})


// Toggling Feature

document.getElementById('add-top-btn') .addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display = 'block'
    document.getElementById('cash-out-parent').style.display = 'none'
    document.getElementById('paybill-parent').style.display = 'none'
    document.getElementById('transfer-parent').style.display = 'none' 
    document.getElementById('bonus-parent').style.display = 'none' 
            document.getElementById('transactions-parent').style.display = 'none'
})


document.getElementById('cashout-top-btn') .addEventListener('click', function(){
    document.getElementById('cash-out-parent').style.display = 'block'
    document.getElementById('add-money-parent').style.display = 'none'
    document.getElementById('paybill-parent').style.display = 'none'
    document.getElementById('transfer-parent').style.display = 'none' 
        document.getElementById('bonus-parent').style.display = 'none' 
                document.getElementById('transactions-parent').style.display = 'none'

})

document.getElementById('paybill-top-btn') .addEventListener('click', function(){
    document.getElementById('paybill-parent').style.display = 'block'
    document.getElementById('cash-out-parent').style.display = 'none'
    document.getElementById('add-money-parent').style.display = 'none'
    document.getElementById('transfer-parent').style.display = 'none' 
        document.getElementById('bonus-parent').style.display = 'none' 
                document.getElementById('transactions-parent').style.display = 'none'

})


document.getElementById('transfer-top-btn') .addEventListener('click', function(){
    document.getElementById('transfer-parent').style.display = 'block' 
    document.getElementById('paybill-parent').style.display = 'none'
    document.getElementById('cash-out-parent').style.display = 'none'
    document.getElementById('add-money-parent').style.display = 'none'
        document.getElementById('bonus-parent').style.display = 'none' 
                document.getElementById('transactions-parent').style.display = 'none'

})

document.getElementById('bonus-top-btn') .addEventListener('click', function(){
    document.getElementById('bonus-parent').style.display = 'block' 
    document.getElementById('transfer-parent').style.display = 'none' 
    document.getElementById('paybill-parent').style.display = 'none'
    document.getElementById('cash-out-parent').style.display = 'none'
    document.getElementById('add-money-parent').style.display = 'none'
        document.getElementById('transactions-parent').style.display = 'none'

})
document.getElementById('all-transfer-btn') .addEventListener('click', function(){
    document.getElementById('transactions-parent').style.display = 'block' 
    document.getElementById('bonus-parent').style.display = 'none' 
    document.getElementById('transfer-parent').style.display = 'none' 
    document.getElementById('paybill-parent').style.display = 'none'
    document.getElementById('cash-out-parent').style.display = 'none'
    document.getElementById('add-money-parent').style.display = 'none'
    

})


// document.getElementById('transfer-button').
// addEventListener('click', function(){
//     document.getElementById('add-money-parent').style.display =this.none;
// })

document.getElementById("add-button") 
.addEventListener ('click', function(){

    const forms = document.getElementsByClassName ("form");

    for(const form of forms){
        form.style.display = 'none'
    }

    document.getElementById('add-money-parent').style.display ='block'
    
})


