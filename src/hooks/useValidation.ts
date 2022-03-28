import React from "react";

export const useValidation = (value: string, validations: any) => {
    const [isEmpty, setIsEmpty] = React.useState(true)
    const [minLengthError, setMinLengthError] = React.useState(false)
    const [error, setError] = React.useState('Обязательное поле')
    const [emailError, setEmailError] = React.useState('Обязательное поле')
    const [errorEmail, setErrorEmail] = React.useState(false)
    const [phoneError, setPhoneError] = React.useState(false)
    const [phoneErrorMessage, setPhoneErrorMessage] = React.useState('Обязательное поле')
    const [inputValid, setInputValid] = React.useState(false)


    React.useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    if (value.length < validations[validation]) {
                        setMinLengthError(true)
                        setError('Слишком короткое')
                        if (!value.length) {
                            setError('Обязательное поле')
                        }
                    } else {
                        setMinLengthError(false)
                        setError('')
                    }
                    break;
                case 'isEmpty':
                    value ? setIsEmpty(false) : setIsEmpty(true)
                    break;

                case 'isEmail':
                    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    if (!re.test(String(value).toLowerCase())) {
                        setErrorEmail(true)
                        setEmailError('Некорректный email')
                        if (!value.length) {
                            setEmailError('Обязательное поле')
                        }
                    } else {
                        setErrorEmail(false)
                        setEmailError('')
                    }
                    break;
                case 'isPhone':
                    const ph = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm
                    if (!ph.test(String(value))) {
                        setPhoneError(true)
                        setPhoneErrorMessage('Некорректный номер телефона')
                        if (!value.length) {
                            setPhoneErrorMessage('Обязательное поле')
                        }
                    } else {
                        setPhoneError(false)
                        setPhoneErrorMessage('')
                    }
            }
        }
    }, [value])

    React.useEffect(() => {
        if (isEmpty || minLengthError || errorEmail || phoneError) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty, minLengthError, errorEmail, phoneError])

    return {
        isEmpty,
        minLengthError,
        error,
        emailError,
        errorEmail,
        phoneError,
        phoneErrorMessage,
        inputValid
    }
}
