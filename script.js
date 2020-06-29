const form = document.getElementById('form');

// input form fields
const firstName = form['firstname'];
const lastName = form['lastname'];
const email = form['email'];
const password = form['password'];

// If input field has Error CSS applied, will remove once
// the field is changed.
firstName.addEventListener('input', () => {
    if (firstName.parentNode.classList.contains('error'))
        removeErrorFrom(firstName.id);
});

lastName.addEventListener('input', () => {
    if (lastName.parentNode.classList.contains('error'))
        removeErrorFrom(lastName.id);
});

email.addEventListener('input', () => {
    if (email.parentNode.classList.contains('error'))
        removeErrorFrom(email.id);
});

password.addEventListener('input', () => {
    if (password.parentNode.classList.contains('error'))
        removeErrorFrom(password.id);
});

// validate form input fields on button press
form.addEventListener('submit', e => {
    e.preventDefault();

    if (firstName.value === '') {
        addErrorTo('firstname', 'First Name cannot be empty');
    } else {
        removeErrorFrom('firstname');
    }

    if (lastName.value === '') {
        addErrorTo('lastname', 'Last Name cannot be empty');
    } else {
        removeErrorFrom('lastname');
    }

    if (email.value === '') {
        addErrorTo('email', 'Email cannot be empty');
    } else if (!isValid(email.value)) {
        addErrorTo('email', 'Looks like this is not an email');
    } else {
        removeErrorFrom('email');
    }

    if (password.value === '') {
        addErrorTo('password', 'Password cannot be empty');
    } else {
        removeErrorFrom('password');
    }
});

/**
 * Add Error CSS class to form element
 * @param field form field (input) to change
 * @param message add error message under field
 */
const addErrorTo = (field, message) => {
    console.log(field);
    console.log(form);
    const formControl = form[field].parentNode;
    formControl.classList.add('error');
    console.log(formControl);

    const small = formControl.querySelector('small');
    small.innerText = message;
}

/**
 * Remove Error CSS class from form element
 * @param field form field (input) to change
 */
const removeErrorFrom = (field) => {
    const formControl = form[field].parentNode;
    console.log(formControl);
    formControl.classList.remove('error');
}

/**
 * Checks if a valid email address is entered
 * @param email - email to check
 * @returns { Boolean } - true/false
 */
const isValid = (email) => {
    var validate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validate.test(String(email).toLowerCase());
}