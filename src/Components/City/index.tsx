import React, {FC} from 'react';


interface CityProps {
    id: string,
    name: string,
    onSelectCity: (name: string) => void

}



export const City:FC<CityProps> = ({name, onSelectCity, id}) => {
    return (
        <div onClick={() => onSelectCity(name)} className="content__dropdown-text">{name}</div>
    )};


