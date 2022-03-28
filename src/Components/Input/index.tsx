import React, {FC} from 'react';
import {IValidation} from "../../models/IValidation";


interface InputProps {
        props: IValidation,
    placeholder: string,
    title: string
}

export const Input:FC<InputProps> = ({props, placeholder, title}) => {

    const check = (props.isDirty && props.isEmpty || props.isDirty && props.minLengthError)

    console.log(check, props.error.length)



    return (
        <div className="content__form-input">
            <input  onChange={e => props.onChange(e)} onBlur={e => props.onBlur(e)} value={props.value}
                   name={'name'} type="text" id={'email'} className={`content__input ${check ? 'content__input--error' : 'content__input'}`}
                   autoComplete={'off'}
                   placeholder={placeholder}/>
            <label htmlFor="email" className={`content__label ${check ? 'content__label--error' : 'content__label'}`}>{title} *</label>
            {check &&
            <div className="content__form-error">{props.error}</div>}
        </div>
    );
};

