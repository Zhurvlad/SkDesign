import React, {FC} from 'react';
import {IValidation} from "../../models/IValidation";

interface InputPhoneProps {
    phone: IValidation,
    changeHandler: (e:React.FormEvent<HTMLInputElement>) => void
}

export const InputPhone:FC<InputPhoneProps> = ({phone, changeHandler}) => {
    const check = (phone.isDirty && phone.isEmpty || phone.isDirty && phone.phoneError)

    return (
        <div className="content__form-input">
            <input onInput={(e) => changeHandler(e)} onChange={e => phone.onChange(e)}
                   onBlur={e => phone.onBlur(e)} type="text" id={'email'} className={`content__input ${check ? 'content__input--error' : 'content__input'}`}
                   autoComplete={'off'}
                   placeholder={'+7 (000) 000-00-00'}/>
            <label htmlFor="email" className={`content__label ${check ? 'content__label--error' : 'content__label'}`}>Номер телефона *</label>
            {check &&
            <div className="content__form-error">{phone.phoneErrorMessage}</div>}
        </div>
    );
};

