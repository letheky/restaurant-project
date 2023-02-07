export function contact(){
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)
    
    const content = $('#content')
    //create bone for home page
    const form = document.createElement('form')

    form.classList.add('contact-form')

    content.appendChild(form)

    //create input feild
    const firstName = document.createElement('input')
    const lastName = document.createElement('input')
    const telNumber = document.createElement('input')
    const address = document.createElement('input')
    const email = document.createElement('input')
    const dateOfBirth = document.createElement('input')
    const firstNameLabel = document.createElement('label')
    const lastNameLabel = document.createElement('label')
    const telNumberLabel = document.createElement('label')
    const addressLabel = document.createElement('label')
    const emailLabel = document.createElement('label')
    const dateOfBirthLabel= document.createElement('label')

    //add text for label
    firstNameLabel.textContent = "FISRT NAME"
    lastNameLabel.textContent =  "LAST NAME"
    telNumberLabel.textContent = "TELEPHONE NUMBER"
    addressLabel.textContent = "ADDRESS"
    emailLabel.textContent =  "EMAIL"
    dateOfBirthLabel.textContent = "DATE OF BIRTH"

    //add label for attribute 
    firstNameLabel.htmlFor = "firstName"
    lastNameLabel.htmlFor =  "lastName"
    telNumberLabel.htmlFor = "telNum"
    addressLabel.htmlFor = "address"
    emailLabel.htmlFor = "email"
    dateOfBirthLabel.htmlFor = "dateOfBirth"

    //add type for input
    firstName.type = 'text'
    lastName.type = 'text'
    telNumber.type = 'tel'
    address.type = 'text'
    email.type = 'email'
    dateOfBirth.type = 'date'

    //add name for input
    firstName.name = 'firstName'
    lastName.name = 'lastName'
    telNumber.name = 'telNum'
    address.name = 'address'
    email.name = 'email'
    dateOfBirth.name = 'dateOfBirth'

    //add pattern
    email.pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
    telNumber.pattern = '[0-9]{10}'

    //set required to true
    firstName.required = true
    lastName.required = true
    telNumber.required = true
    address.required = true
    email.required = true
    dateOfBirth.required = true

    //add placeholder for input
    firstName.placeholder = 'Please enter your first name here...'
    lastName.placeholder = 'Please enter your last name here...'
    telNumber.placeholder = 'Please enter your telephone number here...'
    address.placeholder = 'Please fill out your home address here...'
    email.placeholder = 'Please fill out your email address here...'
    dateOfBirth.placeholder = 'Please fill out your date of birth here...'

    for(let i=0; i<6; i++){
        const formBlock = document.createElement('div')
        formBlock.classList.add('form-block')
        if(i===0){
            formBlock.appendChild(firstNameLabel)
            formBlock.appendChild(firstName)
        }
        if(i===1){
            formBlock.appendChild(lastNameLabel)
            formBlock.appendChild(lastName)
        }
        if(i===2){
            formBlock.appendChild(telNumberLabel)
            formBlock.appendChild(telNumber)
        }
        if(i===3){
            formBlock.appendChild(addressLabel)
            formBlock.appendChild(address)
        }
        if(i===4){
            formBlock.appendChild(emailLabel)
            formBlock.appendChild(email)
        }
        if(i===5){
            formBlock.appendChild(dateOfBirthLabel)
            formBlock.appendChild(dateOfBirth)
        }
        form.appendChild(formBlock)
    }

    //create submit btn
    const submitBtn = document.createElement('button')
    submitBtn.textContent = 'Submit'
    submitBtn.classList.add('primary-btn')
    form.appendChild(submitBtn)

    // //create footer
    const footer = document.createElement('div')
    footer.classList.add('footer')
    content.appendChild(footer)

    const footerText = document.createElement('p')
    footerText.textContent = "Copyright 2023 Ⓒ by Le The Ky"
    footerText.setAttribute('style','text-align:center;')
    footer.appendChild(footerText)
}

export function removeContact(){
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)

    const content = $('#content')
    const contactForm = $('.contact-form')
    const footer = $('.footer')

    if(contactForm)content.removeChild(contactForm)
    if(footer)content.removeChild(footer)
    console.log('remove contact')
}