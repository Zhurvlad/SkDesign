import React, {FC} from 'react';
import {IValidation} from '../../models/IValidation'


interface ButtonProps {
    onAddInfo: (e:any) => void,
    email: IValidation,
    phone: IValidation,
    profile: IValidation,
    name: IValidation,
    loading: boolean
}


export const Button:FC<ButtonProps> = ({onAddInfo, email, phone, profile, name, loading}) => {



    return (
        <>
        <button onClick={(e:any) => onAddInfo(e)}
                disabled={!email.inputValid || !phone.inputValid || !profile.inputValid || !name.inputValid}
                className={`content__btn ${loading ? 'content__btn--loading' : ''}`}>
            <span className={'content__btn-text'}>Отправить заявку</span>
        </button>
            </>
    );
};

