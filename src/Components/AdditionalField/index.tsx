import React, {ChangeEvent, FC, MouseEventHandler} from 'react';
import arrowSVF from "../../assets/icon.svg";
import SourseDB from "../../assets/sources.json";

interface AdditionFieadProps {


    recipient:string,
    social: string,
    onRecipient: (e:ChangeEvent<HTMLInputElement>) => void,
    onVisibleSocial:MouseEventHandler<HTMLSpanElement>,
    visibleSocial: boolean,
    onSocial: (sours:string) => void
}

export const AdditionField:FC<AdditionFieadProps> = ({onSocial, visibleSocial, onVisibleSocial, onRecipient, social,recipient}) => {

    const [visibleAdditionField, setVisibleAdditionField] = React.useState(false)

    const onVisibleAdditionField = () => {
        setVisibleAdditionField(!visibleAdditionField)
    }

    return (
        <>
            <p onClick={() => onVisibleAdditionField()} className="content__form-show-info">Показать
                дополнительные поля <span>
                                <img src={arrowSVF} alt=""/></span></p>
            {visibleAdditionField && <>
                <div className="content__form-info">

                    <div className="content__form-input">
                        <input onChange={e => onRecipient(e)} value={recipient} type="text"
                               className='content__input' autoComplete={'off'}
                               placeholder={'ФИО'} style={{width: '380px'}}/>
                        <label className={'content__label'}>Получатель</label>
                    </div>

                </div>
                <div className="form">
                    <div>
                        <input type="text" id="email" className="form__input" autoComplete="off"
                               placeholder=" "/>
                        <label htmlFor="email" className="form__label">{social ? social : 'Откуда узнали про\n' +
                            '                                нас?'}
                        </label>
                        <span onClick={onVisibleSocial}/>
                    </div>
                    {visibleSocial && <div className="form__form-dropdown">
                        <div className="form__dropdown-choose">
                            {SourseDB && SourseDB.map(sours => (
                                <div key={sours} onClick={() => onSocial(sours)}
                                     className="form__dropdown-text">{sours}</div>))}
                        </div>
                    </div>}
                </div>
            </>}
        </>
    );
};

