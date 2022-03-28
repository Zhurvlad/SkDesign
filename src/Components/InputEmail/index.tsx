import React, {FC} from 'react';
import {IValidation} from "../../models/IValidation";

interface InputEmailProps {
    email: IValidation
}

export const InputEmail:FC<InputEmailProps> = ({email}) => {

    const check = (email.isDirty && email.isEmpty || email.isDirty && email.errorEmail)

    return (
        <div className="content__form-input">
            <input
                onBlur={e => email.onBlur(e)}
                onChange={e => email.onChange(e)}
                value={email.value}
                name='email' type="text" id={'email'} className={`content__input ${check ? 'content__input--error' : 'content__input'}`}
                autoComplete={'off'}
                placeholder={'example@skdesign.ru'}/>
            <label htmlFor="email" className={`content__label ${check ? 'content__label--error' : 'content__label'}`}>E-mail *</label>
            {check &&
            <div className="content__form-error">{email.emailError}</div>}
        </div>
    );
};

