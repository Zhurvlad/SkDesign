import React, {FC} from 'react';
import CityDB from "../../assets/cities.json";
import {City} from "../City";

interface DropDownCityProps {
    selectCity: string,
    onCityVisible: () => void,
    cityVisible: boolean,
    onSelectCity: (name:string) => void,

}

export const DropDownCity:FC<DropDownCityProps> = ({selectCity, onCityVisible, cityVisible, onSelectCity}) => {



    return (
        <div className="content__form-dropdown">
            <div className="content__dropdown-btn">
                {selectCity ? selectCity : 'Выберите город *'}
                <span  onClick={onCityVisible}/>
            </div>
            {!cityVisible && !selectCity && <div className="content__form-error">Обязательное поле</div>}
            {cityVisible && <div className="content__dropdown-choose">
                {CityDB && CityDB.map(city =>
                    <City
                        onSelectCity={onSelectCity}
                        id={city.id}
                        name={city.name}
                        key={city.id}/>)}
            </div>}
        </div>
    );
};

