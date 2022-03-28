import React, {ChangeEvent, FC} from 'react';

interface StudioProps {
    studioValue: string,
    onStudioValue: (e: ChangeEvent<HTMLInputElement>) => void
}



export const Studio:FC<StudioProps> = ({studioValue, onStudioValue}) => {
    return (
        <div className="content__form-input content__input-org">
            <input onChange={e => onStudioValue(e)} value={studioValue} type="text" className='content__input'
                   autoComplete={'off'}
                   placeholder={'SK Design'} style={{width: '380px'}}/>
            <label className={'content__label'}>Название организации студии</label>
        </div>
    );
};

