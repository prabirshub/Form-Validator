const from = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

//Show input error message
function showError(input, message) {
  const formControl = input.parentElement
  formControl.className = 'form-control error'
  const small = formControl.querySelector('small')
  small.innerText = message
}

//Show success outline
function showSuccess(input) {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}

//Ckeck email is valid
function checkEmail(input) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
  if (re.test(input.value.trim())) {
    showSuccess(input)
  } else {
    showError(input, 'Email is not valid')
  }
}

//Check required filds
function chekRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFiledName(input)} is required`)
    } else {
      showSuccess(input)
    }
  })
}

//Chech input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFiledName(input)} must be atleast ${min} charactors`)
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFiledName(input)} must be less than ${max} charactors`
    )
  } else {
    showSuccess(input)
  }
}

//Ckeck password match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Password do not match')
  }
}

//Get field name
function getFiledName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

//Event listener
from.addEventListener('submit', function (e) {
  e.preventDefault()

  chekRequired([username, email, password, password2])
  checkLength(username, 3, 15)
  checkLength(password, 6, 25)
  checkEmail(email)
  checkPasswordsMatch(password, password2)
})
