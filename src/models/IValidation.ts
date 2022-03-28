import React, {ChangeEvent} from "react";

export interface IValidation {
    isEmpty: boolean,
    minLengthError: boolean,
    error: string,
    emailError: string,
    errorEmail: boolean,
    phoneError: boolean,
    phoneErrorMessage: string,
    inputValid: boolean,
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void,
    isDirty: boolean
}