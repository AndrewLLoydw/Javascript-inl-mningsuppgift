// Function validate firstname, min 2 characters

function validateFirstName(firstName){
    const errorFirstName = document.getElementById('errorFirstName')

    if (firstName.length > 1) {
        errorFirstName.innerHTML = ""
        return true

    } else {
        errorFirstName.innerHTML = "<span>Please enter your firstname with atleast 2 letters</span>"
        errorFirstName.classList.add('error-msg')
        return false
    }
}

// Function validate firstname end

// Function validate lastname, min characters

function validateLastName(lastName) {
    const errorLastName = document.getElementById('errorLastName')
    if (lastName.length > 1){
        errorLastName.innerHTML = ""
        return true

    } else {
        errorLastName.innerHTML = "<span>Please enter your lastname with atleast 2 letters</span>"
        errorLastName.classList.add('error-msg')
        return false
    }
}

// Function validate lastname end

// Function validate age, over 18 years - not older than 150 years

function underAgeValidate(underAgeCheck){
	const checkFormat = underAgeCheck.replace(/-/g, "/");
	const inputDate = new Date(checkFormat);
	const currentDate = new Date().toJSON().slice(0,10)+'01:00:00';
	const myAge = ~~((Date.now(currentDate) - inputDate) / (31557600000));

	if(myAge > 18 && myAge < 150 || myAge === 18) {
        errorAge.innerHTML = ""
     	return true;

    } else {
        errorAge.innerHTML = "<span>You need to be over 18 years old, please enter a valid date</span>"
        errorAge.classList.add('error-msg')
        return false
    }    
}

// Function validate age end

// Function validate address, min 2 characters

function validateAddress(address) {
    const errorAddress = document.getElementById('errorAddress')

    if(address.length > 1) {
        errorAddress.innerHTML = ""
        return true

    }else {
        errorAddress.innerHTML = "<span>Please enter your address with atleast 2 letters</span>"
        errorAddress.classList.add('error-msg')
        return false
    }
}

// Function validate address ebd

// Function validate city, min 2 characters

function validateCity(city) {
    if(city.length > 1) {
        errorCity.innerHTML = ""
        return true

    }else {
        errorCity.innerHTML = "<span>Please enter your city with atleast 2 letters</span>"
        errorCity.classList.add('error-msg')
        return false
    }
}

// Function validate city end

// Function validate zip code, 5 characters

function validateZipCode(zipCode) {
    if(zipCode.length === 5) {
        errorZipCode.innerHTML = ""
        return true

    }else {
        errorZipCode.innerHTML = "<span>Please enter your zip code with 5 characters</span>"
        errorZipCode.classList.add('error-msg')
        return false
    }
}

// Function validate zip code end

// Function validate email, must be a valid regEx email

function validateEmailAddress(email) {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const errorEmail = document.getElementById('errorEmail')

    if(regEx.test(email)) {
        errorEmail.innerHTML = ""
        return true

    }else {
        errorEmail.innerHTML = "<span>Please enter a correct email: example@example.ex</span>"
        errorEmail.classList.add('error-msg')
        return false   
    }
}

// Function validate email end

// Function validate password, uppercase letter, lowercase letter, number and 8 characters minimum

function validatePassword(password) {
    const regEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    const errorPassword = document.getElementById('errorPassword')

    if (regEx.test(password)) {
        errorPassword.innerHTML = ""
        return true

    } else {
        errorPassword.innerHTML = "<span>Your password needs to be atleast 8 characters long and include an uppercase letter, lowercase letter and a number</span>"
        errorPassword.classList.add('error-msg')
        return false
    }
}

// Function validate password end

// Function to check password match

function validateConfirmPassword() {
    const userPassword = document.getElementById('password').value
    const userConfirmPassword = document.getElementById('cpassword').value
    const errorPasswordC = document.getElementById('errorPasswordC')

    if (userPassword === userConfirmPassword ) {
        errorPasswordC.innerHTML = ""
        return true 
    
    } else {
        errorPasswordC.innerHTML = "<span>The passwords does not match</span>"
        errorPasswordC.classList.add('error-msg')
        return false
    }
}

// Function to check password match end

// Switch for loop

function onSubmit(e) {
    e.preventDefault()
    const errors = []
    
    for (let element of e.target){
        switch(element.id) {
            case 'firstName':
                errors[0] = validateFirstName(element.value)
                // console.log(validateFirstName(element.value))
                break;

            case 'lastName':
                errors[1] = validateLastName(element.value)
                // console.log(validateLastName(element.value))
                break;

            case 'ageCheck':
                errors[2] = underAgeValidate(element.value)
                // console.log(underAgeValidate(element.value))
                break;

            case 'address':
                errors[3] = validateAddress(element.value)
                // console.log(validateAddress(element.value))
                break;

            case 'city':
                errors[4] = validateCity(element.value)
                // console.log(validateCity(element.value))
                break;

            case 'zipCode':
                errors[5] = validateZipCode(element.value)
                // console.log(validateZipCode(element.value))
                break;

            case 'email':
                errors[6] = validateEmailAddress(element.value)
                // console.log(validateEmailAddress(element.value))
                break;

            case 'password':
                errors[7] = validatePassword(element.value)
                // console.log(validatePassword(element.value))
                break;

            case 'cpassword':
                errors[8] = validateConfirmPassword(element.value)
                // console.log(validateConfirmPassword(element.value))
                break
        } 
    } if(!errors.includes(false)) {
        console.log(true)
        document.getElementById('errorForm').innerHTML = ""
        alert('You have created an account, welcome!')
        window.location.replace('http://127.0.0.1:5500/index.html');
        return true
    } else
        console.log(false)
        document.getElementById('errorForm').innerHTML = "<h3>Please fill out all fields!</h3>"
        return false

}

// Switch for loop end