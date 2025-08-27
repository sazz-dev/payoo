

document.getElementById('loginButton') .addEventListener('click', function(event){
    event.preventDefault()
 const mobileNumber = 134567890;
    const pinNumber = 1234;

    const mobileNumberValue = document.getElementById('mobile-number').value
    const mobileNumberValueConvert = parseInt(mobileNumberValue)
    const pinNumberValue = document.getElementById('pin-number').value
    const pinNumberValueConvert = parseInt(pinNumberValue)

    if(mobileNumberValueConvert === mobileNumber && pinNumberValueConvert === pinNumber){
        window.location.href="./home.html"

    }
    else{
        alert('Please Provide Valid Credentials')
    }

})