import React, {ChangeEvent} from 'react';

import {Button} from "../Button";
import {useInput} from "../../hooks/useInput";
import axios from "axios";
import {Input} from "../Input";
import {InputPhone} from "../InputPhone";
import {InputEmail} from "../InputEmail";
import {AdditionField} from "../AdditionalField";
import {DropDownCity} from "../DropDownCity";
import {Studio} from "../Studio";
import {useActions} from "../../hooks/useActions";

export const FeedbackForm = () => {
    const name = useInput('', {isEmpty: true, minLength: 2})
    const profile = useInput('', {isEmpty: true, minLength: 3})
    const email = useInput('', {isEmpty: true, isEmail: true})
    const phone = useInput('', {isEmpty: true, isPhone: true})

    const [selectCity, setSelectCity] = React.useState('')
    const [visibleSocial, setVisibleSocial] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [studioValue, setStudioValue] = React.useState('')
    const [social, setSocial] = React.useState('')
    const [recipient, setRecipient] = React.useState('')

    const {addInfo} = useActions()

    const info = {
        name: name.value,
        phone: phone.value,
        profile: profile.value,
        email: email.value,
        studio: studioValue,
        social: social,
        city:  selectCity
    }


    const onSelectCity = (nameCity: string) => {
        setSelectCity(nameCity)
        setCityVisible(false)
    }

    const onSocial = (soc: string) => {
        setSocial(soc)
        setVisibleSocial(false)
    }

    const onRecipient = (e: ChangeEvent<HTMLInputElement>) => {
        setRecipient(e.target.value)
    }


    const onAddInfo =  (e:any) => {
        e.preventDefault()
        setTimeout(async () => {
            setLoading(false)
           await axios.post('http://localhost:3001/info', info)

        }, 3000)
        setLoading(true)
        addInfo(info)
        setSelectCity('')
        setStudioValue('')
        setSocial('')
        setRecipient('')
        console.log(info)
    }

    const onStudioValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStudioValue(e.target.value)
    }


    const onVisibleSocial = () => {
        setVisibleSocial(!visibleSocial)
    }

    const [cityVisible, setCityVisible] = React.useState(false)

    const onCityVisible = () => {
        setCityVisible(!cityVisible)
    }

    const changeHandler = (e: any) => {
        const value = e.target.value
        e.target.value = value.replace(/\D/g, '')
    }
    return (
        <div className="content__form">
            <div className="content__items-form">
                <Input props={name} placeholder={'Иван'} title={'Ваше имя'}/>

                <InputPhone phone={phone} changeHandler={changeHandler}/>

                <InputEmail email={email}/>

                <Input props={profile} title={'Ссылка на профиль'} placeholder={'instagram.com/skde…'}/>

                <DropDownCity
                    selectCity={selectCity}
                    onSelectCity={onSelectCity}
                    onCityVisible={onCityVisible}
                    cityVisible={cityVisible}/>

                <Studio
                    onStudioValue={onStudioValue}
                    studioValue={studioValue}/>

                <AdditionField visibleSocial={visibleSocial}
                               social={social}
                               recipient={recipient}
                               onVisibleSocial={onVisibleSocial}
                               onRecipient={onRecipient}
                               onSocial={onSocial}/>

                <Button loading={loading}
                        onAddInfo={onAddInfo}
                        email={email}
                        name={name}
                        phone={phone}
                        profile={profile}/>
            </div>
        </div>
    );
};
