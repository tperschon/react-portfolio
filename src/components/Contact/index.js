import React, { useState } from "react";

function Contact() {
    // get the form state/setter
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // error state for email validation
    const [emailValidation, setEmailValidation] = useState('hidden');
    // error state for required forms
    const [requiredError, setRequiredError] = useState({ nameError: 'hidden', emailError: 'hidden', messageError: 'hidden' });
    // disabled state for submit button
    const [disabled, setDisabled] = useState(true);
    // handle changes within form so as to keep the state updated
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };
    // handle blur event for email input
    const handleBlur = (event) => {
        // get name of field and its value
        const { name, value } = event.target;
        // check if email field and determine which error to show
        if (name === 'email') {
            if (value) {
                // since email has value, hide that error
                setRequiredError({
                    ...requiredError,
                    [`${name}Error`]: 'hidden'
                });
                // check that the value conforms to email standards, if it does hide error, if not show it
                if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) === true) setEmailValidation('hidden');
                else setEmailValidation('error');
            } 
            // since no value, show the required error
            else setRequiredError({
                ...requiredError,
                [`${name}Error`]: 'error'
            });
        }
        // since it's not the email field, check if no value, set error if so otherwise we set hidden
        else if (!value) {
            setRequiredError({
                ...requiredError,
                [`${name}Error`]: 'error'
            });
        } else {
            setRequiredError({
                ...requiredError,
                [`${name}Error`]: 'hidden'
            });
            toggleSubmitDisable();
        }
    };
    const toggleSubmitDisable = function() {
        // handle disabling/enabling submit button
        if(requiredError.nameError === 'hidden' && requiredError.emailError === 'hidden' && requiredError.messageError === 'hidden' && emailValidation === 'hidden') {
            setDisabled(false);
        } else setDisabled(true);
    }
    // handle submission of form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        alert(`
This would send an email with ${formState.name}, ${formState.email} and ${formState.message} if it were using a backend component, but for now it does nothing.
`);
    };
    return (
        <section className="contact">
            <h2>Contact</h2>
            <form className="contact-form" name="contact-form" onSubmit={handleFormSubmit}>
                <label htmlFor="name">Name:</label>
                <br></br>
                <input
                    className="text-input"
                    htmlFor="contact-form"
                    type="text"
                    name="name"
                    placeholder="Your name here"
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <br></br>
                <span className={requiredError.nameError} name="nameError">Field is required.<br></br></span>
                <label htmlFor="email">E-mail Address:</label>
                <br></br>
                <input
                    className="text-input"
                    htmlFor="contact-form"
                    type="text"
                    name="email"
                    placeholder="name@email.domain"
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <br></br>
                <span className={requiredError.emailError} name="emailError">Field is required.<br></br></span>
                <span className={emailValidation} name="validationError">Email must conform to "a@b.c" format.<br></br></span>
                <label htmlFor="message">Message:</label>
                <br></br>
                <textarea
                    htmlFor="contact-form"
                    type="text"
                    name="message"
                    placeholder=""
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <br></br>
                <span className={requiredError.messageError} name="messageError">Field is required.<br></br></span>
                <input className="submit-button" htmlFor="contact-form" type="submit" name="contactFormSubmit" value="Submit" disabled={disabled}></input>
            </form>
        </section>
    );
};

export default Contact;