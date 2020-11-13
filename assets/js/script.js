/* =====================================================
   Height
   ===================================================== */
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
})


document.documentElement.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, false);


/* =====================================================
   Login Page - Fade out effect
   ===================================================== */
const loginContainer = document.querySelector('.login-container')
const tabContainer = document.querySelector('.tab-container')
const tabSignIn = document.querySelector('.tab-sign-in')
const tabSignUp = document.querySelector('.tab-sign-up')
const signInForm = document.querySelector('.sign-in-form')
const signUpForm = document.querySelector('.sign-up-form')
const loginForm = document.querySelector('.sign-in-form')
const wrapper = document.querySelector('.wrapper')


const fadeOutEffect = () => {
    setInterval(function () {
        loginForm.style.display = "none"
    }, 400);
    wrapper.classList.add('form-success')
}

if (loginContainer) {
    tabSignIn.classList.add('active')
    signInForm.classList.add('active')

    tabSignIn.addEventListener('click', () => {
        tabSignIn.classList.add('active')
        tabSignUp.classList.remove('active')
        signInForm.classList.add('active')
        signUpForm.classList.remove('active')
    })

    tabSignUp.addEventListener('click', () => {
        tabSignUp.classList.add('active')
        tabSignIn.classList.remove('active')
        signUpForm.classList.add('active')
        signInForm.classList.remove('active')
    })

    loginButton.addEventListener('click', (e) => {
        e.preventDefault()
        fadeOutEffect()
    })
}


/* =====================================================
   Header - Toggle Button
   ===================================================== */
const toggleAdmin = document.querySelector('.toggle-admin')
const toggleCheckbox = document.querySelector('.toggle-checkbox')

if (toggleAdmin) {
    toggleAdmin.addEventListener('click', () => {
        if (toggleCheckbox.checked) {
            location.href = '../../admin/user_list.html'
        } else {
            location.href = '../../index.html'
        }
    })
}


/* =====================================================
   Admin Settings - Add Input
   ===================================================== */
const addWardBed = document.querySelector('.add-input-ward-bed')
if(addWardBed) {
    const setWardBedInput = document.querySelector('.set-ward-bed .input-container input')
    const wardBedList = document.querySelector('.ward-bed-list')

    function setWardBed(text) {
        const createdList = document.createElement('li')
        const createdInput = document.createElement('input')
        const createdButtonContainer = document.createElement('div')
        const createdDeleteButton = document.createElement('button')
        const createdEditButton = document.createElement('button')

        createdInput.value = text
        createdButtonContainer.classList.add('button-container')
        createdDeleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>`
        createdEditButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M4 7.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5S5.5 9.83 5.5 9 4.83 7.5 4 7.5zm10 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-5 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S9.83 7.5 9 7.5z"/></svg>`
        createdDeleteButton.classList.add('delete-setting')
        createdEditButton.classList.add('edit-setting')
        createdButtonContainer.appendChild(createdDeleteButton)
        createdButtonContainer.appendChild(createdEditButton)

        createdList.appendChild(createdInput)
        createdList.appendChild(createdButtonContainer)
        wardBedList.appendChild(createdList)

        createdDeleteButton.addEventListener('click', deleteSettings)
    }

    function deleteSettings(event) {
        const currentButton = event.target
        const currentList = currentButton.closest('li')
        wardBedList.removeChild(currentList)
    }

    function handleSetWardBed(e) {
        e.preventDefault()
        const currentValue = setWardBedInput.value
        setWardBed(currentValue)
        setWardBedInput.value = ''
    }

    addWardBed.addEventListener('click', handleSetWardBed)
}


const addEvent = document.querySelector('.add-input-event')
if(addEvent) {
    const setEventInput = document.querySelector('.set-event .input-container input')
    const eventList = document.querySelector('.event-list')

    function setEvent(text) {
        const createdList = document.createElement('li')
        const createdInput = document.createElement('input')
        const createdButtonContainer = document.createElement('div')
        const createdDeleteButton = document.createElement('button')
        const createdEditButton = document.createElement('button')

        createdInput.value = text
        createdButtonContainer.classList.add('button-container')
        createdDeleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>`
        createdEditButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M4 7.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5S5.5 9.83 5.5 9 4.83 7.5 4 7.5zm10 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-5 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S9.83 7.5 9 7.5z"/></svg>`
        createdDeleteButton.classList.add('delete-setting')
        createdEditButton.classList.add('edit-setting')
        createdButtonContainer.appendChild(createdDeleteButton)
        createdButtonContainer.appendChild(createdEditButton)

        createdList.appendChild(createdInput)
        createdList.appendChild(createdButtonContainer)
        eventList.appendChild(createdList)

        createdDeleteButton.addEventListener('click', deleteSettings)
    }

    function deleteSettings(event) {
        const currentButton = event.target
        const currentList = currentButton.closest('li')
        eventList.removeChild(currentList)
    }

    function handleSetEvent(e) {
        e.preventDefault()
        const currentValue = setEventInput.value
        setEvent(currentValue)
        setEventInput.value = ''
    }

    addEvent.addEventListener('click', handleSetEvent)
}